// components/EventModal.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: { name: string; date: string }) => void;
}

interface EventFormValues {
  name: string;
  date: string;
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, onSave }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<EventFormValues>();

  if (!isOpen) return null;

  const onSubmit: SubmitHandler<EventFormValues> = (data) => {
    onSave(data);
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl p-6 sm:p-8 w-full max-w-md relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl">✕</button>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Add Event</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Event Name"
            className="border p-2 w-full rounded text-sm sm:text-base"
            {...register('name', { required: 'Event name is required' })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            type="date"
            className="border p-2 w-full rounded text-sm sm:text-base"
            {...register('date', { required: 'Date is required' })}
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}

          <div className="flex justify-between gap-4 mt-2">
            <button
              type="button"
              onClick={() => { reset(); onClose(); }}
              className="flex-1 bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-200 text-sm sm:text-base"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex-1 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm sm:text-base"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
