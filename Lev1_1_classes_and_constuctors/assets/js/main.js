class Ball {
    constructor(ballType = "regular") { // setz ballType eine default Eigenschaft
        this.ballType = ballType;
    }
}

const ball1 = new Ball();
const ball2 = new Ball("super");

console.log(ball1.ballType);
console.log(ball2.ballType);