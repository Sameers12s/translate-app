import React from 'react';

const OutputBox = ({ translatedText }) => {
  return (
    <div className="mt-4">
      <label className="flex flex-start ml-4 mb-2 text-base font-bold">Translated Text:</label>
      <textarea
        value={translatedText}
        readOnly
        className="block w-full h-32 p-2 border border-gray-300 rounded-xl shadow-sm resize-none focus:outline-none"
      ></textarea>
    </div>
  );
};

export default OutputBox;
