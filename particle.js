class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
    constructor() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.r = 10;
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(-2, 2);
    }

    // creation of a particle.
    createParticle() {
        noStroke();
        // fill(13, 115, 79);
        fill(11, 122, 83);
        ellipse(this.x, this.y, this.r);
    }

    // setting the particle in motion.
    moveParticle() {
        if (this.x < 0 || this.x > width) this.xSpeed *= -1;
        if (this.y < 0 || this.y > height) this.ySpeed *= -1;
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}
