import request from 'axios';

export default {
    withAbility: (ability) => {
        const baseUrl = 'http://pokeapi.co/api/v2/ability';
        const res = request.get(`${baseUrl}/${ability}`);
        console.log(res);
        return res;
    }
};

