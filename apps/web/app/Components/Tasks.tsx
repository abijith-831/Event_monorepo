'use client';
import React, { useState } from 'react';
import EventModal from './EventModal';
import ListView from './ListView';
import { useEventStore } from '../../src/store/useEventStore';
import CardView from './CardView';
import { useSnackbar } from 'notistack';
import ConfirmModal from './ConfirmModal';

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { events, addEvent, deleteEvent, viewType ,searchQuery} = useEventStore();
  const { enqueueSnackbar } = useSnackbar();
  const [deleteIdx, setDeleteIdx] = useState<number | null>(null);

  const handleSave = (event: { name: string; date: string }) => {
    addEvent(event);
    enqueueSnackbar('Event added successfully!', { variant: 'success' });
  };

  const handleDelete = (idx: number) => {
    setDeleteIdx(idx); // open confirm modal
  };

  const confirmDelete = () => {
    if (deleteIdx !== null) {
      deleteEvent(deleteIdx);
      enqueueSnackbar('Event deleted successfully!', { variant: 'info' });
      setDeleteIdx(null);
    }
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full p-4">
      {/* Header row */}
      <div className="flex flex-col md:flex-row w-full justify-between gap-6">
        {/* Left Section */}
        <div className="flex flex-col flex-1 py-4 px-2 md:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Events</h1>
          <h4 className="mt-2 text-gray-600 text-sm sm:text-base">
            {events.length} Total, proceed to resolve them
          </h4>
        </div>

        {/* Stats & Button */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 md:gap-12 items-center justify-end px-2 md:px-6 py-2">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold">44</span>
            <span className="text-gray-500 text-sm sm:text-base">Done</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold">13</span>
            <span className="text-gray-500 text-sm sm:text-base">In Progress</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white px-4 sm:px-6 py-2 rounded-full text-base sm:text-lg hover:bg-white hover:text-black hover:border hover:border-black transition"
          >
            Add Event
          </button>
        </div>
      </div>

      {/* Events View */}
      {/* Events View */}
      <div className="flex-1 mt-6 px-2 md:px-6">
        {viewType === 'list' ? (
          <div className="overflow-y-auto flex-1 h-full max-h-full scrollbar-hide scroll-smooth snap-y snap-mandatory">
            <ListView events={filteredEvents} onDelete={handleDelete} />
          </div>
        ) : (
          <div className="overflow-x-auto flex-1 h-full max-h-full scrollbar-hide scroll-smooth snap-x snap-mandatory">
            <CardView events={filteredEvents} onDelete={handleDelete} />
          </div>
        )}
      </div>


      {/* Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />

      <ConfirmModal
        isOpen={deleteIdx !== null}
        onClose={() => setDeleteIdx(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Tasks;
