import React from 'react'
import { FiTrash2 } from 'react-icons/fi';

interface MyEvent {
    name: string;
    date: string;
}

interface CardViewProps {
    events: MyEvent[];
    onDelete: (idx: number) => void;
}

const CardView :React.FC<CardViewProps> = ({events, onDelete}) => {
  return (
    <div className="flex gap-4 overflow-x-auto h-full pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory">
        {events.map((ev, idx) => (
            <div key={idx} className="bg-gradient-to-b from-gray-100 to-gray-200 p-4 border border-gray-200 relative rounded shadow w-60 h-72 flex-shrink-0">
                <h2 className="font-bold text-xl">{idx+1} - {ev.name}</h2>
                <p className='text-gray-600 mt-2 text-sm'>{ev.date}</p>
                <button onClick={() => onDelete(idx)} className="absolute bottom-3 right-3 text-red-500 mt-2 flex gap-2"  >   <FiTrash2 size={20} />Delete </button>
            </div>
        ))}
    </div>       
  )
}

export default CardView
