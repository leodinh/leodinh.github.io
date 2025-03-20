export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());
