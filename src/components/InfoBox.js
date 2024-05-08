import React from 'react';

const InfoBox = () => {
    return (
        <div className="rounded-lg shadow-md p-4 border border-gray-300 font-bold">
            <h3 className="mb-4">How to Use:</h3>
            <ol>
                <li>1. Select the source language from the dropdown menu.</li>
                <li>2. Choose the target language you want to translate the text into.</li>
                <li>3. Enter the text you want to translate into the input box.</li>
                <li>4. Click the "Translate" button to get the translated text.</li>
                <li>5. View the translated text in the output box below the input area.</li>
                <li>6. Easily copy the translated text or make any necessary adjustments as needed.</li>
            </ol>
        </div>
    );
};

export default InfoBox;
