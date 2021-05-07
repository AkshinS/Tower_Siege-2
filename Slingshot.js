class Slingshot {
    constructor(myBodyA, myPointB) {
        var options = {
            bodyA: myBodyA,
            pointB: myPointB,
            length: 30,
            stiffness: 0.04
        }
        this.pointB = myPointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    fly() {
        this.slingshot.bodyA = null;
    }

    attach(body){
        this.slingshot.bodyA = body;
    }

    display() {
        if (this.slingshot.bodyA) {
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            stroke("red");
            strokeWeight(3);
            line(pointA.x, pointA.y + 20, pointB.x, pointB.y);
        }
    }
}