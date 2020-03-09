class PopUp{
    constructor(el) {
        this.el = document.querySelector(".popuppage");
        this.link = this.el.querySelectorAll(".popup");
        this.overlay = this.el.querySelector(".overlay");
        this.x = this.el.querySelectorAll(".closers");

        // Event Listeners for the links to open popup
        for (let i = 0; i < this.link.length; i++) {
                this.open(this.link[i]);
        };

        // Event Listeners for the X icon to close popup
        for (let i = 0; i < this.x.length; i++) {
            this.x[i].addEventListener("click", () => {
                this.el.querySelector(".overlay").classList.remove("active");
                this.el.querySelector(".active").classList.remove("active");
                document.querySelector("body").classList.remove("popupactive");
            });
        }

        // Closes popups on ESC keydown
        this.el.addEventListener("keydown", this.checkKeyPress, false);
    }

    open(sel) {
        sel.addEventListener("click", () => {
            this.overlay.classList.add("active");
            this.el.querySelector("." + sel.id).classList.add("active");
            //locks scroll
            document.querySelector("body").classList.add("popupactive");
        });
    }

    close(sel) {

    }

    // Function for ESC keydown event to close popup
    checkKeyPress(key) {  
        if (key.keyCode == "27") {
            document.querySelector(".overlay").classList.remove("active");
            document.querySelector("body").classList.remove("popupactive");
            document.querySelector(".active").classList.remove("active");
        }
    }
}

let pu = new PopUp(".popuppage");