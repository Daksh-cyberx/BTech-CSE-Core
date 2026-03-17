


const pro = new Promise((res, rej) => {
    setTimeout(() => {
        res("payment done")
    }, 5000)

})

async function getData() {
    const value = await pro;
    console.log(value)
    console.log("Dashboard access")
}
getData()

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))


async function data(){
    try {
        const user = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json()
        console.log(json)
    } catch (err) {
        console.log("err")
}
}
data()