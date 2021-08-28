// function getElement(){
//     // new_window = window.open("") 
//     // new_window = document.open()

//     // var studentName = document.getElementByName("studentName")
//     // new_window.document.write("Length of your name is" + studentName.length)
//     // new_window.document.close()
    
//     let el = document.getElementById("blog")
//     console.log(el)


// }

// let el = document.getElementById("blog")
//     console.log(el)

// let ele = document.getElementById("header")
//     console.log(ele)

// let elem = document.getElementById("para")
//     console.log(elem)

// let eleme = document.getElementById("div")
//     console.log(eleme)   
document.body.onload = addElement;

function addElement() {
    
const newTag = document.createElement("div");
const newText = document.createTextNode("Hello new tag");

newTag.appendChild(newText);
newTag.setAttribute("id", "newAttr");

const rootTag = document.getElementById("root");
document.body.insertBefore(newTag, rootTag);
}