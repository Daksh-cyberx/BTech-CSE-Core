const profile=document.getElementById("profile")
console.log(profile)

profile.style.backgroundColor="#f5f5f5";
profile.style.padding="15px";
profile.style.textAlign="center";


const task=document.getElementsByClassName("important")
for (let i=0; i<task.length; i++){
    task[i].style.color="Blue";
    task[i].style.fontSize="45px";
}
console.log("COUNT: ",task.length)

