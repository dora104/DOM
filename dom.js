//console.dir(document)
//console.log(document.domain)

//console.log(document.title)
//document.title="Moj prvi sajt"

//console.dir(document.head)
//console.log(document.all)
//console.log(document.all[8])

//document.all[8].textContent="Drugi naslov"

console.log(document.forms);
console.log(document.forms[0]);

console.log(document.getElementsByClassName("list-item"));

let items=document.getElementsByClassName("list-item");

items[3].textContent="promenila sam listu";
items[2].style.backgroundColor="purple";
for(let i =0 ;i<items.length;i++){
    if(i%2==0) items[i].style.backgroundColor="grey";
    else items[i].style.backgroundColor="lightgrey";
}

console.log(document.getElementsByTagName("li"))
let li=document.getElementsByTagName("li")

li[1].textContent="asd"
li[1].style.fontSize="20px"
li[1].style.fontWeight="bold"

console.log(document.getElementsByClassName("title"))

let title=document.getElementsByClassName("title")
title[1].textContent="Promenila title"
let container=document.getElementById("container")
container.style.backgroundColor="purple"

let drugiLink=document.querySelector("#link a")
console.log(drugiLink)

drugiLink.style.backgroundColor="red"

let lista=document.querySelectorAll(".list-item")
console.log(lista)
lista[2].textContent="ne znam sta"