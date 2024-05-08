import React from 'react';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'zh-CN', name: 'Chinese (Simplified)' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hi', name: 'Hindi' },
    { code: 'tr', name: 'Turkish' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'id', name: 'Indonesian' },
];

const LanguageSelector = ({ label, value, onChange }) => {
    return (
        <div>
            <label className="block mb-2 text-base font-bold">{label}:</label>
            <select
                value={value}
                onChange={onChange}
                className="block w-full p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-indigo-500"
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
