alert("Famous Books And Authors List");
alert("Welcome to My World of Books & Authors: Questions");

let books = prompt("Enter BookName: "), auth1 = prompt("Enter AuthorName: "), Book2 = prompt("Please input your Best Books"), Auth2 = prompt("Please input your Best Author"), text = prompt("Verify Bookname"), writer = prompt("Please verify Authors Name");
alert("Welcome to Array question on Books & Authors: Questions");
let Ar_book = prompt("Type Book-Name Here: "), auhor = prompt("Type Authors-Name Here: "), mile = prompt("Input Book id here: "), amile = prompt("Input Authors details here: "), last = prompt("Confirm Book details here: "), alast = prompt("Confirm Authors Name here: ");

const data = {

}
data[books] = auth1;
data[Book2] = Auth2;
data[text] = writer;

// this is where i changed the html files with js codes based on Object

book1.innerHTML = books;
author1.innerHTML = data[books];

book2.innerHTML = Book2;
Authn.innerHTML = data[Book2];

book3.innerHTML = text;
auto.innerHTML = data[text];

console.log(data);

const list = [

];
list[0] = Ar_book;
list[1] = auhor;
list[2] = mile;
list[3] = amile;
list[4] = last;
list[5] = alast;

// this is where i changed the html files with js codes based on Arrays

Abook1.innerHTML = Ar_book;
Actor1.innerHTML = list[1];
Abuk2.innerHTML = mile;
Ant.innerHTML = list[3];
Abuk3.innerHTML = last;
Anto.innerHTML = list[5];

function myBtn() {
  list.sort();
  demo.innerHTML = list;
}
function myBtnpop() {
  list.pop();
  pop.innerHTML = list;
}
function myBtnpush() {
  list.push("Ghost");
  push.innerHTML = list;
}
function myBtnshift() {
  list.shift();
  shift.innerHTML = list;
}
function myBtnunshift() {
  list.unshift("Killer Frost");
  unshift.innerHTML = list;
}
function myBtnsplice() {
  list.splice(7, 8, "Memories", "Prosper");
  spliced.innerHTML = list;
}
function myBtnslice() {
  list.slice();
  sliced.innerHTML = list;
}


console.log(list.pop());
console.log(list.push("Ghostfrink"));
console.log(list.shift());
console.log(list.unshift("Kelvin Fredge"));
console.log(list.splice());
console.log(list.slice());
console.log(list.sort());
console.log(list);

alert("Looking Good");