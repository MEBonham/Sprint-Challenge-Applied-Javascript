
class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = this.element.querySelector(".left-button");
        this.rightButton = this.element.querySelector(".right-button");
        this.pics = this.element.querySelectorAll("img");
        this.pics = Array.from(this.pics).map( pic => new CarouselPic(pic));
        this.currentIdx = 0;
        this.pics[this.currentIdx].show(true);
        this.leftButton.addEventListener("click", event => this.leftShift(event));
        this.rightButton.addEventListener("click", event => this.rightShift(event));
    }
    leftShift(e) {
        this.pics[this.currentIdx].slideHide(true);
        this.currentIdx--;
        if (this.currentIdx < 0) {
            this.currentIdx = this.pics.length - 1;
        }
        this.pics[this.currentIdx].show(false);
    }
    rightShift(e) {
        this.pics[this.currentIdx].slideHide(false);
        this.currentIdx++;
        if (this.currentIdx >= this.pics.length) {
            this.currentIdx = 0;
        }
        this.pics[this.currentIdx].show(false);
    }
}

class CarouselPic {
    constructor(element) {
        this.element = element;
    }
    show(pageLoad) {
        this.element.classList.add("current");
        if (!pageLoad) {
            TweenLite.to(this.element, 0.7, {x: 0});
        }
    }
    slideHide(toRight) {
        if(toRight) {
            TweenLite.to(this.element, 0.7, {x: -800, onComplete: this.hide()});
        } else {
            TweenLite.to(this.element, 0.7, {x: 800, onComplete: this.hide()});
        }
    }
    hide() {
        this.element.classList.remove("current");
    }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/