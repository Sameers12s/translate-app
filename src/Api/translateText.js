const translateText = async (apiKey, inputText, sourceLanguage, targetLanguage) => {
    try {
        const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
            },
            body: new URLSearchParams({
                q: inputText,
                target: targetLanguage,
                source: sourceLanguage,
            }),
        };

        const response = await fetch(url, options);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Translation failed: ${errorText}`);
        }

        const result = await response.json();
        return result.data.translations[0].translatedText;
    } catch (err) {
        console.error('Translation error:', err.message);
        throw new Error('Translation failed. Please try again later.');
    }
};

export { translateText };
