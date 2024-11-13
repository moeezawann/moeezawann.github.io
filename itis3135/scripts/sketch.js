// function setup() {
//     createCanvas(600, 400);
//   }
//   function draw() {
//     background(0);
//   }
let sun;
let planets = [];

class Planet {
    constructor(radius, distance, orbitSpeed, color) {
        this.radius = radius;
        this.distance = distance;
        this.angle = random(TWO_PI);
        this.orbitSpeed = orbitSpeed;
        this.color = color;
    }

    orbit() {
        this.angle += this.orbitSpeed;
    }

    show() {
        push();
        rotate(this.angle);
        translate(this.distance, 0);
        fill(this.color);
        ellipse(0, 0, this.radius * 2);
        pop();
    }
}

function setup() {
    createCanvas(600, 400);
    sun = new Planet(50, 0, 0, 'yellow');
    planets.push(new Planet(10, 100, 0.01, 'blue'));
    planets.push(new Planet(15, 150, 0.005, 'red'));
    planets.push(new Planet(20, 200, 0.002, 'green'));
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    sun.show();
    for (let planet of planets) {
        planet.orbit();
        planet.show();
    }
}

