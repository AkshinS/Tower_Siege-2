class Polygon {
    constructor(x, y, r) {
        var options = {
            restitution: 0.8,
            density: 1.0,
            friction: 1.0
        }

        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 30, this.r, this.r);
        pop();
    }
}