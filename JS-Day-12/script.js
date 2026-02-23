const heading = document.getElementById("welcome");
console.log(heading);
heading.style.color = "green";
heading.textContent = "hello!";
console.log(heading.textContent);


const answer = document.getElementsByClassName("topics");
console.log(answer);
for(let i=0;i<answer.length;i++){
    if(i%2===0){
        answer[i].style.color = "red";
    }else{
        answer[i].style.color = "blue";
    }
};


const para = document.querySelectorAll(".content1>p");
console.log(para);
para.forEach((item) => {
    item.style.color = "cyan";
})

function handleClick(){
    const button = document.getElementById("btn");
    button.textContent = "Clicked"
}
