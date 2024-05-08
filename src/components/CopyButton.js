import React, { useState } from 'react';

const CopyButton = ({ handleCopy }) => {
    const [showCopyPopup, setShowCopyPopup] = useState(false);

    const handleClick = () => {
        handleCopy();
        setShowCopyPopup(true);
        setTimeout(() => setShowCopyPopup(false), 2000);
    };

    return (
        <div className="flex justify-center relative">
            <button
                onClick={handleClick}
                className="btn btn-success px-10"
            >
                Copy
            </button>
            {showCopyPopup && (
                <div className="flex justify-center items-center text-center absolute bottom-12 bg-red-900 rounded-lg text-white shadow-md py-2 px-4 w-80 animate-fade-in">
                    <span className="flex justify-center items-center">Text Copied!😊</span>
                </div>
            )}
        </div>
    );
};

export default CopyButton;
