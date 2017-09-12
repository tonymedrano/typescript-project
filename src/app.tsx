export class God {
    name:string
    constructor(name:any) {
        this.name = name
    }
    run() {
        let div = document.createElement("div");
        let content = document.createTextNode(`Running ${this.name}...`);
        div.appendChild(content);
        document.body.appendChild(div)
    }
}

let app = new God("God")
app.run()