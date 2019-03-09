class Validation {
    constructor() {
        this.email = "joshua";
        this.pass = "1234";
    }

    valid(email, pass) {
        console.log(this.email, this.pass);
        console.log(email, pass);
        if (this.email == email && this.pass == pass) {
            return window.location.assign("main.html")
        } else
            return console.log("something went wrong..");
    }
};