// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat){
    cats.push(cat);
}

function destructivelyPrependCat(cat){
    cats.unshift(cat);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const newArray = [...cats, name];
    return newArray;
}

function prependCat(name){
    const newArray = [name, ...cats];
    return newArray;
}

function removeLastCat(){
    const newArray = [...cats.slice(0, 2), ...cats.slice(3)];
    return newArray
}

function removeFirstCat(){
    const newArray = [...cats.slice(1)];
    return newArray
}
cats; 