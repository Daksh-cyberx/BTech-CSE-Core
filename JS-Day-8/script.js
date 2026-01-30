const heading = document.getElementById("myID");  // assign the document in a variable
console.log(heading);

heading.style.color="tomato";
heading.style.backgroundColor="black";
heading.textContent="HELLO STUDENTS!";

const paragraph = document.getElementsByClassName("para");
console.log(paragraph);

for(let i=0;i<paragraph.length;i++){
    paragraph[i].style.color="cyan";
}

const content = document.querySelector("#content p");
console.log(content);

content.style.fontSize="40px";
content.style.color="purple";

const content2 = document.querySelectorAll("#content2>p")
console.log(content2);

for (let i=0; i<content2.length; i++){
    content2[i].style.color = "green";
    content2[i].style.fontSize = "50px";
}
