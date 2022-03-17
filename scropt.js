let sozInput = document.querySelector(".shifrInput");
let deShifrInput = document.querySelector(".deshifrInput");
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

let box1 = [];
function lotinKril(str) {
  let lotin = new Map([
    ["a", "а"],
    ["b", "б"],
    ["c", "с"],
    ["d", "д"],
    ["e", "е"],
    ["f", "ф"],
    ["g", "г"],
    ["h", "х"],
    ["i", "и"],
    ["j", "ж"],
    ["k", "к"],
    ["l", "л"],
    ["m", "м"],
    ["n", "н"],
    ["o", "о"],
    ["p", "п"],
    ["q", "к"],
    ["r", "p"],
    ["s", "с"],
    ["t", "т"],
    ["u", "у"],
    ["v", "в"],
    ["x", "x"],
    ["y", "й"],
    ["z", "з"],
    ["sh", "щ"],
    ["ch", "ч"],
    [" ", " "],
    [".", "."],
    [",", ","],
    ["-", "-"],
    ["0", "0"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["6", "6"],
    ["7", "7"],
    ["8", "8"],
  ]);
  let satr = str.toLowerCase().split("");
  for (let i = 0; i < satr.length; i++) {
    box1.push(lotin.get(satr[i]));
  }
  let natija1 = box1.join("");
  result1.textContent = natija1;
}
sozInput.addEventListener("input", () => {
  lotinKril(sozInput.value);
  box1 = [];
});
btn1.addEventListener("click", () => {
  result1.textContent = "";
  sozInput.value = "";
});

////funktion two
let box2 = [];
function KrilLotin(str) {
  let lotin = new Map([
    ["а", "a"],
    ["б", "b"],
    ["с", "c"],
    ["д", "d"],
    ["е", "e"],
    ["ф", "f"],
    ["г", "g"],
    ["х", "h"],
    ["и", "i"],
    ["ж", "j"],
    ["к", "k"],
    ["л", "l"],
    ["м", "m"],
    ["н", "n"],
    ["о", "o"],
    ["п", "p"],
    ["к", "q"],
    ["p", "r"],
    ["с", "s"],
    ["т", "t"],
    ["у", "u"],
    ["в", "v"],
    ["x", "x"],
    ["й", "y"],
    ["з", "z"],
    ["щ", "sh"],
    ["ч", "ch"],
    [" ", " "],
    [".", "."],
    [",", ","],
    ["-", "-"],
    ["0", "0"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["6", "6"],
    ["7", "7"],
    ["8", "8"],
    ["9", "9"],
  ]);
  let satr = str.toLowerCase().split("");
  for (let i = 0; i < satr.length; i++) {
    box2.push(lotin.get(satr[i]));
  }
  let natija2 = box2.join("");
  result2.textContent = natija2;
}
deShifrInput.addEventListener("input", () => {
  KrilLotin(deShifrInput.value);
  box2 = [];
});
btn2.addEventListener("click", () => {
  result2.textContent = "";
  deShifrInput.value = "";
});
