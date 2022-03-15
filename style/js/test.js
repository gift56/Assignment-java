// alert("Famous Books And Authors List");
// alert("Welcome to My World of Books & Authors: Questions");

// let books = prompt("Enter BookName: "), auth1 = prompt("Enter AuthorName: "), Book2 = prompt("Please input your Best Books"), Auth2 = prompt("Please input your Best Author"), text = prompt("Verify Bookname"), writer = prompt("Please verify Authors Name");


const data = {

}
data[books] = auth1;
data[Book2] = Auth2;
data[text] = writer;

//this is where ic changed the html files
book1.innerHTML = books;
author1.innerHTML = data[books];

book2.innerHTML = Book2;
Authn.innerHTML = data[Book2];

book3.innerHTML = text;
auto.innerHTML = data[text];

console.log(data);
// alert("Looking Good");