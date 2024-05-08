import React from 'react';

function InputText({ inputText, onInputChange }) {
    return (
        <div className="mb-4">
            <label className="flex flex-start ml-4 mb-2 text-base font-bold text-gray-400">
                Input Text:
            </label>
            <textarea
                value={inputText}
                onChange={onInputChange}
                className="block w-full h-32 p-2 border border-gray-300 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent rounded-xl"
                placeholder="Enter text to translate..."
            ></textarea>
        </div>
    );
}

export default InputText;
