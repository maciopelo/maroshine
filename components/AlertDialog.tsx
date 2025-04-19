import React, { useState } from "react";

interface AlertDialogProps {
  message: string;
  onClose: () => void;
}

const AlertDialog = ({ message, onClose }: AlertDialogProps) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300); // Poczekaj aż animacja się skończy
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className={`bg-white rounded-xl shadow-2xl p-6 z-10 m-2 transform transition-transform duration-300 ${
          visible ? "scale-100" : "scale-90"
        }`}
      >
        <p className="text-gray-800 mb-4 text-center">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={handleClose}
            className="bg-yellow-400 text-white px-4 py-2 rounded-md cursor-pointer transition"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
