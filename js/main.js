class PopUp{
    constructor(el) {
        this.el = document.querySelector(".popuppage");
        this.link = this.el.querySelectorAll(".popup");
        this.overlay = this.el.querySelector(".overlay");
        this.popupwindow = this.el.querySelector(".popupwindow");
        this.close = this.el.querySelectorAll(".closers");


        for (let i = 0; i < this.link.length; i++) {
            this.link[i].addEventListener("click", () => {
                this.overlay.classList.add("active");
                this.popupwindow = this.el.querySelector(".popupwindow").classList.add("active");
        });
        }

        function checkKeyPress(key) {  
            if (key.keyCode == "27") {
                document.querySelector(".overlay").classList.remove("active");
                document.querySelector(".popupwindow").classList.remove("active");
            }
        }

        window.addEventListener("keydown", checkKeyPress, false);
                
        for (let i = 0; i < this.close.length; i++) {
            this.close[i].addEventListener("click", () => {
                document.querySelector(".overlay").classList.remove("active");
                document.querySelector(".popupwindow").classList.remove("active");
        });
        }
    }
}

let pu = new PopUp(".popuppage");