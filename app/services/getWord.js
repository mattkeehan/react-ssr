import request from 'axios';

const baseUrl = 'https://api.datamuse.com';

export default {
    getWord: (wordPart) => {
        const url = `${baseUrl}/sug?s=${wordPart}`;//suggestions for the user if they have typed in rawand so far
        console.log(`calling ${url}`);
        const res = request.get(url);
        return res;
    }
};

