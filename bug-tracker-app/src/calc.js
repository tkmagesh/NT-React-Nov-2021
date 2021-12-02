export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}

/* The above functions are assembled as a 'module' object and the module is object is exported*/

const utils = {
    isEven(no){
        return no % 2 === 0;
    },
    isOdd(no){
        return no % 2 !== 0;
    }
}

export default utils;