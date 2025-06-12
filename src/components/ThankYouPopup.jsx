import React from 'react';

const ThankYouPopup = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
    <div className="bg-white text-center rounded-lg p-6 w-[90%] max-w-sm shadow-xl">
      <div className="text-3xl mb-2">❤️</div>
      <h2 className="font-bold text-lg">Thank you for connecting with us.</h2>
      <p className="text-gray-600 mb-4">Our team will contact you soon.</p>
      <button
        onClick={onClose}
        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
      >
        Done
      </button>
    </div>
  </div>
);

export default ThankYouPopup;
