let inp = document.getElementsByTagName("input")[0];

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

let add = document.getElementById("add");
let minus = document.getElementById("minus");
let mul = document.getElementById("mul");
let div = document.getElementById("div");

let sz = document.getElementById("sz");
let dz = document.getElementById("dz");
let dt = document.getElementById("dt");

let del = document.getElementById("del");
let ac = document.getElementById("ac");
let percent = document.getElementById("percent");
let eq = document.getElementById("eq");


// Numbers

one.addEventListener("click", () => {
    inp.value += "1";
});

two.addEventListener("click", () => {
    inp.value += "2";
});

three.addEventListener("click", () => {
    inp.value += "3";
});

four.addEventListener("click", () => {
    inp.value += "4";
});

five.addEventListener("click", () => {
    inp.value += "5";
});

six.addEventListener("click", () => {
    inp.value += "6";
});

seven.addEventListener("click", () => {
    inp.value += "7";
});

eight.addEventListener("click", () => {
    inp.value += "8";
});

nine.addEventListener("click", () => {
    inp.value += "9";
});


// Zero

sz.addEventListener("click", () => {
    inp.value += "0";
});


// Double zero

dz.addEventListener("click", () => {
    inp.value += "00";
});


// Decimal

dt.addEventListener("click", () => {
    inp.value += ".";
});


// Operators

add.addEventListener("click", () => {
    inp.value += "+";
});

minus.addEventListener("click", () => {
    inp.value += "-";
});

mul.addEventListener("click", () => {
    inp.value += "*";
});

div.addEventListener("click", () => {
    inp.value += "/";
});


// DEL
del.addEventListener("click", () => {
    inp.value = inp.value.slice(0, -1);
});

// AC
ac.addEventListener("click", () => {
    inp.value = "";
});

// EQUALS
eq.addEventListener("click", () => {
    if (inp.value !== "") {
        inp.value = eval(inp.value);
    }
});

// Percentage

percent.addEventListener("click", () => {
    inp.value = inp.value / 100;
});