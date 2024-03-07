import axios from "axios";
import CryptJS from "crypto-js";

function hashingAlgo(pub, priv, currTime) {
    return CryptJS.MD5(currTime + priv + pub).toString();
}

const getHeroes = async (url, oldHeroes) => {
    try {
        const response = await axios.get(url);
        // console.log("Successful:", response.data.data.results);
        const newHeroes = response.data.data.results;
        const heroList = [...oldHeroes, ...newHeroes];
        // console.log("Heroes from api:", newHeroes);
        return heroList;
    } catch (error) {
        // console.log("Failed:", error);
        return oldHeroes;
    }
};

let heroLibrary = [];
const publicKeyCredential = import.meta.env.VITE_REACT_APP_MARVEL_API_KEY_PUBLIC;
const privateKeyCredential = import.meta.env.VITE_REACT_APP_MARVEL_API_KEY_PRIVATE;
const currTime = new Date().getTime();
const hashedUrl =
    `https://gateway.marvel.com/v1/public/characters?ts=${currTime}&apikey=${publicKeyCredential}` +
    `&hash=${hashingAlgo(publicKeyCredential, privateKeyCredential, currTime)}` +
    `&limit=20`
;

export const heroesEndpoint = async () => {
    return [...await getHeroes(hashedUrl,heroLibrary)];
}