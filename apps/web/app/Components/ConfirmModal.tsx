// components/ConfirmModal.tsx
import React from "react";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message = "Are you sure you want to delete this?",
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg relative">
        <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
        <p className="text-gray-700 mb-6">{message}</p>

        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100" >   Cancel </button>
          <button onClick={() => {   onConfirm();   onClose(); }} className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">  Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
