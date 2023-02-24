//console.dir(document)
//console.log(document.domain)

//console.log(document.title)
//document.title="Moj prvi sajt"

//console.dir(document.head)
//console.log(document.all)
//console.log(document.all[8])

//document.all[8].textContent="Drugi naslov"

/*console.log(document.forms);
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
*/

//parentNode
let listItem=document.getElementById("items")
console.log(listItem.parentNode)

//parentElement
console.log(listItem.parentElement)

listItem.parentElement.style.background="lime"

//childNodes

console.log(listItem.childNodes)
listItem.childNodes[1].style.backgroundColor="green"
listItem.childNodes[2].style.background="green"
console.log(listItem.childNodes[0])

//children(Element)

console.log(listItem.children)
listItem.children[0].style.background="green"

//firstChild(node)

console.log(listItem.firstChild)

//firstElementChild

console.log(listItem.firstElementChild)

//lastChild
//lastElementChild

//sibling
console.log(listItem.previousElementSibling)
listItems.previousElementSibling.style.backgroundColor="brown"
console.log(listItem.nextElementSibling)
listItem.nextElementSibling.style.backgroundColor="red"

let lista=document.querySelectorAll(".list-item")
console,log(lista)
lista[1].previousElementSibling.style.backgroundColor="blue"
lista[1].nextElementSibling.style.backgroundColor="lightblue"

lista[1].parentElement.parentElement.style.backgroundColor="orange"