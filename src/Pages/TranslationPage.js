import React, { useState } from 'react';
import LanguageSelector from '../components/LanguageSelector';
import InputText from '../components/InputText';
import OutputBox from '../components/OutputBox';
import NavBar from '../components/NavBar';
import logo from '../assetes/logo.png';
import { IconLanguage } from '@tabler/icons-react';
import InfoBox from '../components/InfoBox';
import { translateText } from '../Api/translateText';
import CopyButton from '../components/CopyButton';

function TranslationPage() {
    const [sourceLanguage, setSourceLanguage] = useState('en');
    const [targetLanguage, setTargetLanguage] = useState('hi');
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleTranslate = async () => {
        if (!inputText) {
            setError('Please enter some text to translate.');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const apiKey = 'aab6aee47emsh30c948364736635p191cf7jsnb481dabf14b7';
            const translatedText = await translateText(apiKey, inputText, sourceLanguage, targetLanguage);
            setTranslatedText(translatedText);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const isButtonDisabled = isLoading || !inputText;

    const handleCopy = () => {
        navigator.clipboard.writeText(translatedText);
    };

    return (
        <div>
            <NavBar />
            <div className='flex justify-center items-center w-full'>
                <img src={logo} alt="Logo" className="w-90 h-80" />
            </div>

            <div className="flex flex-col min-h-screen container mx-auto px-4 md:px-10 lg:px-40 py-8 lg:py-6 2xl:px-72 rounded shadow-md">
                <h1 className="text-3xl font-bold text-center mb-4 text-blue-500">
                    Google Language Translation
                </h1>
                <InfoBox />
                <div className="flex justify-between my-5">
                    <div className="w-1/4 mr-20">
                        <LanguageSelector
                            label="From:"
                            value={sourceLanguage}
                            onChange={(e) => setSourceLanguage(e.target.value)}
                        />
                    </div>
                    <div className="w-1/4">
                        <LanguageSelector
                            label="To:"
                            value={targetLanguage}
                            onChange={(e) => setTargetLanguage(e.target.value)}
                        />
                    </div>
                </div>
                <div className='my-5'>
                    <InputText inputText={inputText} onInputChange={onInputChange} />
                </div>
                <button
                    onClick={handleTranslate}
                    disabled={isButtonDisabled}
                    className="flex justify-center items-center bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:bg-blue-700 space-x-2 text-xl font-semibold"
                >
                    {isLoading ? 'Translating...' : 'Translate'}
                    <IconLanguage stroke={2} size={30} />
                </button>
                <div className='mt-10 mb-3'>
                    <OutputBox translatedText={translatedText} />
                </div>
                <CopyButton handleCopy={handleCopy} />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
        </div>
    );
}

export default TranslationPage;
