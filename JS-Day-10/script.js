const para = document.getElementsByTagName("p")

for (let i = 0; i < para.length; i++) {
    if (i % 2 === 0) {
        para[i].style.color = "blue";
    } else {
        para[i].style.color = "green";
    }
}
para[para.length - 1].style.fontWeight = "bold"


// from now on we have to use forEach method...
para.forEach((para, index) => {
    if (index % 2 === 0) {
        para.style.color = "blue";
    } else {
        para.style.color = "green";
    }
})

// create a new element and append it
const newpara = document.createElement("p")
newpara.textContent = "This is a dynamically created paragraph.";
console.log(newpara)

document.getElementById("content").append(newpara);


const image = document.createElement("img");
image.setAttribute("src", "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240624063839.jpeg")
image.setAttribute("alt", "K.R Mangalam University")

document.getElementById("gallery").append(image);


setInterval(() => {
    let date = new Date()
    console.log(date);

    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

    document.getElementById("digi-clock").textContent = hour + ":" + min + ":" + second;

}, 1000)