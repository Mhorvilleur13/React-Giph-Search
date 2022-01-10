import { atom } from 'recoil';

export const randomGiphState = atom({
    key: "random-giph",
    default: []
});

export const giphState = atom({
    key: "giphs",
    default: []
});
