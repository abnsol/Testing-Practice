export const calculator = {
    add : (x,y) => x + y,
    subtract : (x,y) => x - y,
    multiply : (x,y) => x * y,
    divide : (x,y) => (y == 0) ? (() => {throw new Error("Division by zero");})() : (x/y),
};