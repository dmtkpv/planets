import '@/styles/base.scss'
import renderer from '@/scripts/renderer'



function getHeight (width, { perspective, angle }) {
    const a = -angle * Math.PI / 180;
    const y = width - width * Math.cos(a);
    const z = width * Math.sin(a);
    return width - width / 2 - (y - width / 2) * perspective / (perspective - z);
}

function getMaxLevel (data) {
    return Math.max(...data.map(item => item.level));
}




export default class PlanetarySystem {



    // ----------------------
    // Constructor
    // ----------------------

    constructor (selector, { camera, data }) {

        this.events = {};
        this.camera = camera;

        this.zoom = {};
        this.zoom.max = 1;
        this.zoom.steps = 10;

        this.width = {};
        this.width.max = 1920;
        this.width.min = 320;

        this.height = {};
        this.height.max = getHeight(this.width.max, camera);

        this.$scene = document.querySelector(selector);
        this.$camera = document.createElement('div');
        this.$camera.classList.add('planetary-camera');
        this.$camera.style.transform = `perspective(${camera.perspective}px) translateY(50%) rotateX(${camera.angle}deg) translateY(-50%)`;
        this.$scene.appendChild(this.$camera);
        this.$scene.classList.add('planetary-system');
        this.$scene.style.width = this.width.max + 'px';
        this.$scene.style.height = this.height.max + 'px';

        renderer.call(this, data);
        this.resize();

    }



    // ----------------------
    // Zoom
    // ----------------------

    resize () {
        const w = this.$scene.parentNode.offsetWidth / this.width.max;
        const h = this.$scene.parentNode.offsetHeight / this.height.max;
        this.zoom.min = Math.min(w, h);
        this.zoom.min = Math.max(this.zoom.min, this.width.min / this.width.max);
        this.setZoom(100);
    }

    setZoom (value) {
        value = Math.max(value, 100);
        value = Math.min(value, 100 * this.zoom.max / this.zoom.min);
        const scale = value * this.zoom.min / 100;
        const tx = (this.$scene.parentNode.offsetWidth - this.width.max * scale) / 2;
        const ty = (this.$scene.parentNode.offsetHeight - this.height.max * scale) / 2;
        this.zoom.value = value;
        this.$scene.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
        this.emit('zoom', value);
    }



    // ----------------------
    // Events
    // ----------------------

    on (event, handler) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(handler);
    }

    off (event, handler) {
        if (!this.events[event]) return;
        const index = this.events[event].indexOf(handler);
        if (index > -1) this.events[event].splice(index, 1);
    }

    emit (event, param) {
        if (!this.events[event]) return;
        this.events[event].forEach(handler => handler(param));
    }



}