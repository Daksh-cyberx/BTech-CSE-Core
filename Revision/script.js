function handleClick() {
    alert("clicked");
};

const btn = document.getElementById("btn");
btn.onclick = function () {
    this.textContent = "Clicked!";
    this.style.color = "green";
};

const button = document.getElementById("hello");

// function myFunction(){                   // this is called using named function method....
//     console.log("clicked");
// };

// button.addEventListener("click", myFunction);

button.addEventListener("click", function(event){          // this is called using anonymous function method....
    console.log("clicked");
    console.log(event);
    console.log(event.target);
    console.log(event.type);
})

