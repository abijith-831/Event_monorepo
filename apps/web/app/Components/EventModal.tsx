// components/EventModal.tsx
import React, { useState } from 'react';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: { name: string; date: string }) => void;
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [error , setError] = useState('')

  const handleSave = () => {
    if (name && date) {
      onSave({ name, date });
      setName('');
      setDate('');
      onClose();
    } else {
      setError('Please enter both event name and date.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center  px-4">
      <div className="bg-white rounded-xl p-6 sm:p-8 w-full max-w-md relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl">   ✕ </button>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Add Event</h2>

        {/* Inputs */}
        <input  type="text"  value={name}  onChange={(e) => setName(e.target.value)}  placeholder="Event Name"  className="border p-2 w-full mb-4 rounded text-sm sm:text-base"/>
        <input  type="date"  value={date}  onChange={(e) => setDate(e.target.value)}  className="border p-2 w-full mb-4 rounded text-sm sm:text-base"/>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button  onClick={onClose}  className="flex-1 bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-200 text-sm sm:text-base">
            Close
          </button>
          <button  onClick={handleSave}  className="flex-1 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm sm:text-base">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
