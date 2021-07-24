// const mainBtn = document.getElementById("main-btn");
// console.log(mainBtn);


//console.log(mainBtn);

function hello (name) {
    return `Hello ${name}!`;
}
function goodbye (name) {
    return `Goodbye ${name}!`;
}
function anyGreeting (name, cb) {
    return cb(name);
}
console.log(anyGreeting("Halie", hello));
console.log(anyGreeting("Halie", goodbye));


const changeText = (event) => {
    if (event.target.id === "main-btn") 
        document.querySelector("#text").innerHTML = "You clicked that button.";
    };


const mainBtn = document.querySelector("#main-btn")
mainBtn.addEventListener('click', changeText);
