// Store events
let events = [];

// Add Event
function addEvent() {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    if (title === "" || date === "") {
        alert("Please fill required fields!");
        return;
    }

    const event = { title, date, category, description };
    events.push(event);

    displayEvents();
    clearForm();
}

// Display Events
function displayEvents() {
    const eventList = document.getElementById("eventList");
    eventList.innerHTML = "";

    if (events.length === 0) {
        eventList.innerHTML = "<p>No events yet. Add your first event!</p>";
        return;
    }

    events.forEach((event, index) => {
        const div = document.createElement("div");
        div.className = "event-item";

        div.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Category:</strong> ${event.category}</p>
            <p>${event.description}</p>
            <button onclick="deleteEvent(${index})">Delete</button>
        `;

        eventList.appendChild(div);
    });
}

// Delete Event
function deleteEvent(index) {
    events.splice(index, 1);
    displayEvents();
}

// Clear All
function clearEvents() {
    events = [];
    displayEvents();
}

// Sample Events
function addSampleEvents() {
    events.push(
        { title: "Tech Conference", date: "2026-03-10", category: "Conference", description: "AI & Web Development" },
        { title: "Team Meeting", date: "2026-02-20", category: "Meeting", description: "Project planning discussion" }
    );
    displayEvents();
}

// Clear form
function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}

// DOM Demo Functions
function showInnerHTML() {
    const text = document.getElementById("demoText").innerHTML;
    document.getElementById("output").innerText = "innerHTML: " + text;
}

function showInnerText() {
    const text = document.getElementById("demoText").innerText;
    document.getElementById("output").innerText = "innerText: " + text;
}

function showTextContent() {
    const text = document.getElementById("demoText").textContent;
    document.getElementById("output").innerText = "textContent: " + text;
}

// Keyboard Event
document.addEventListener("keydown", function(event) {
    document.getElementById("keyPress").innerText = "You pressed: " + event.key;
});