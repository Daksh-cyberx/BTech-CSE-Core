function handleClick(){
    const button = document.getElementById("btn");
    button.textContent = "Clicked"
}

function handleClick(){
    const heading = document.querySelector("h1");
    heading.style.color = "red";
    const button = document.getElementById("btn");
    button.textContent = "color changed"
}

function handleClick(){
    const newpara = document.createElement("h2");
    newpara.textContent = "this is a new h2 tag";
    
    const image = document.createElement("img");
    image.setAttribute("src", "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240624063839.jpeg")
    image.setAttribute("alt", "K.R Mangalam University")

    // append both h2 and image inside content div
    document.getElementById("content").append(newpara);
    document.getElementById("content").append(image);
}