import { atom } from 'recoil';

export const randomGiphState = atom({
    key: "random-giph",
    default: []
});

export const giphState = atom({
    key: "giphs",
    default: []
});

export const giphPlaylistState = atom({
    key: "giph-playlist",
    default: []
})
