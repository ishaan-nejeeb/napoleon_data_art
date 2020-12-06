const scale = 1000;
const fader = 2;

// var sketchWidth;
// var sketchHeight;

let index = 0;
let alpha = 0;
let bgColor;
let textColor;

let particles = [];

let mainFont;

function preload() {
    textColor = color(255, 255, 255);
    bgColor = color(204, 163, 88);
    mainFont = loadFont(
        "./assets/fonts/Argesta_Webfont/argestaheadline-regularitalic-webfont.ttf"
    );
}

function setup() {
    // sketchWidth = document.getElementById("canvasContainer").offsetWidth;
    // sketchHeight = document.getElementById("canvasContainer").offsetHeight;
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvasContainer");
    background(bgColor);
    init(index);
}

function draw() {
    setBgColor();
    background(bgColor);
    for (let i = 0; i < data[index].number / scale; i++) {
        // if (data[index].temp) {
        //     particles[i].shiver();
        // }
        particles[i].createParticle();
        particles[i].moveParticle();
    }
    writeText();
}

function init(index) {
    particles = [];
    for (let i = 0; i < data[index].number / scale; i++) {
        particles.push(new Particle());
    }
    alpha = 0;
}

// function mouseClicked() {
//     index++;
//     init(index);
// }

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        index--;
        if (index < 0) {
            index = 0;
            return;
        }
        // console.log(data.length);
    } else if (keyCode === RIGHT_ARROW) {
        index++;
        if (index >= data.length) {
            index = data.length - 1;
            return;
        }
    }

    console.log(index);
    // init(index);
    alpha = 0;
    return false;
}

function writeText() {
    // fill(0, 0, 0, alpha);
    setTextColor();
    fill(textColor);
    textFont(mainFont);
    textAlign(CENTER, BOTTOM);
    textSize(32);
    text(data[index].text, width / 2 - 450, height / 2, 900);
    alpha += fader;
}

function setBgColor() {
    if (data[index].attack) {
        // bgColor = color(204, 163, 88);
        bgColor = color(217, 185, 80);
    } else {
        bgColor = color(64, 20, 20);
    }
}

function setTextColor() {
    if (data[index].attack) {
        textColor = color(0, 0, 0, alpha);
    } else {
        textColor = color(255, 255, 255, alpha);
    }
    // console.log(textColor);
}
