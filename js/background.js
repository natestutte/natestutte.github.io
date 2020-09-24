if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

    let canvas = document.getElementById("canvas-bg");
    let context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let nodeArray;
    let nodeCount;

    class node {
        constructor(x, y, z, radius) {
            this.pos = new THREE.Vector3(x, y, z);
            this.dir = new THREE.Vector3();
            this.r = radius;
        }

        draw() {
            context.beginPath();
            context.arc(this.pos.x, this.pos.y, this.r, 0, 2 * Math.PI);
            context.fillStyle = "rgb(255, 255, 255, " + (this.pos.z / 255) + ")";
            context.fill()
        }

        update() {
            if(this.dir.x === 0 && this.dir.y === 0 && this.dir.z === 0) {
                this.dir.random();
                this.dir.setX((2 * this.dir.x) - 1);
                this.dir.setY((2 * this.dir.y) - 1);
                this.dir.setZ((2 * this.dir.z) - 1);
                this.dir.normalize();
            }

            if(this.pos.x > canvas.width || this.pos.x < 0) {
                this.dir.setX(-this.dir.x);
            }
            if(this.pos.y > canvas.height || this.pos.y < 0) {
                this.dir.setY(-this.dir.y);
            }
            if(this.pos.z > 255 || this.pos.z < 0) {
                this.dir.setZ(-this.dir.z);
            }

            this.pos.setX(this.pos.x + (this.dir.x * this.r / 2));
            this.pos.setY(this.pos.y + (this.dir.y * this.r / 2));
            this.pos.setZ(this.pos.z + (this.dir.z * this.r / 2));

            this.draw();
        }
    }

    function init() {
        nodeArray = [];
        nodeCount = Math.floor((canvas.width * canvas.height) / 10000);
        for (let a = 0; a < nodeCount; a++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let z = 0;

            nodeArray.push(new node(x, y, z, Math.random() * 3 + 2))
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        context.clearRect(0, 0, canvas.width, canvas.height);

        for(let a = 0; a < nodeCount; a++) {
            nodeArray[a].update();
        }
    }

    init();
    animate();

}

