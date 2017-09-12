class App {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    run() {
        return "Hello, " + this.greeting;
    }
}

let app = new App("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(app.run());
}

document.body.appendChild(button);