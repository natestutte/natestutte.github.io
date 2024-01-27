const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseX, mouseY;
let dx = 0;
let dy = 0;

let particleGroup;

class Particle {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.dirX = Math.random() * 2 - 1;
        this.dirY = Math.random() * 2 - 1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.size / 4;
        ctx.fill();
    }

    updatePos(dx, dy) {
        this.x += this.size * dx * 0.01 + this.dirX;
        this.y += this.size * dy * 0.01 + this.dirY;

        if (this.x > canvas.width)
            this.x -= canvas.width;
        else if (this.x < 0)
            this.x += canvas.width;
        if (this.y > canvas.height)
            this.y -= canvas.height;
        else if (this.y < 0)
            this.y += canvas.height;
    }
}

let timeout;
window.addEventListener('mousemove',
    function(event) {
        this.clearTimeout(timeout);
        timeout = setTimeout(function() {
            dx = 0;
            dy = 0;
        }, 10)
        for (let i = 0; i < particleGroup.length; i++) {
            dx = event.movementX;
            dy = event.movementY;
        }
    }
)

window.addEventListener('resize',
    function(event) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    }
)

function init() {
    particleGroup = [];

    let numParticles = (canvas.width * canvas.height) / 6500;
    for (let i = 0; i < numParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * innerWidth);
        let y = (Math.random() * innerHeight);
        let color = '#ba9491';

        particleGroup.push(new Particle(x, y, size, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particleGroup.length; i++) {
        particleGroup[i].updatePos(dx, dy);
        particleGroup[i].draw();
    }
}

init();
animate();