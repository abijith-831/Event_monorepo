import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

interface MyEvent {
  name: string;
  date: string;
}

interface ListViewProps {
  events: MyEvent[];
  onDelete: (idx: number) => void;
}

const ListView: React.FC<ListViewProps> = ({ events, onDelete }) => {
  return (
    <div className='scrollbar-hide scroll-smooth snap-x snap-mandatory'>
      {events.map((ev, idx) => (
        <div key={idx} className="flex justify-between items-center bg-gray-200 p-4 rounded mb-2 hover:bg-gray-100 ">
          <span className='px-2'>{idx + 1} -</span>
          <span className="flex-1 text-left">{ev.name}</span>
          <span className="w-32 text-center">{ev.date}</span>
          <button
            onClick={() => onDelete(idx)}
            className="text-red-500 hover:text-red-700"
          >
            <FiTrash2 size={20} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListView;
