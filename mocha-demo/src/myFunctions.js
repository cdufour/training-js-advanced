const square = n => n*n;
const cube = n => n*n*n;

const addAsync = (a,b) => {
    return new Promise((reject, resolve) => {
        setTimeout(() => resolve(a + b), 1000)
    })
};

module.exports = { square, cube, addAsync }