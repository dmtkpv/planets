import './styles.css'
import PlanetaryObject from './object'
import Utils from './utils'

export default class PlanetarySystem {



    // ----------------------
    // Constructor
    // ----------------------

    constructor (selector, { camera, canvas, objects }) {


        // config

        this.events = {};
        this.camera = camera;

        this.zoom = {};
        this.zoom.max = 1;

        this.width = {};
        this.width.max = canvas.maxWidth;
        this.width.min = canvas.minWidth;

        this.height = {};
        this.height.max = Utils.getHeight(this.width.max, camera);


        // scene

        this.$scene = document.querySelector(selector);
        this.$scene.classList.add('planetary-system');
        this.$scene.style.width = this.width.max + 'px';
        this.$scene.style.height = this.height.max + 'px';
        this.$scene.style.setProperty('--angle', this.camera.angle + 'deg');


        // orbits

        this.$orbits = Utils.createElement('planetary-camera')
        this.$orbits.style.transform = `perspective(${camera.perspective}px) translateY(50%) rotateX(${camera.angle}deg) translateY(-50%)`;
        this.$scene.appendChild(this.$orbits);


        // camera

        this.$objects = Utils.createElement('planetary-camera')
        this.$objects.style.transform = `perspective(${camera.perspective}px) translateY(50%) rotateX(${camera.angle}deg) translateY(-50%)`;
        this.$scene.appendChild(this.$objects);


        // objects

        this.objects = objects.map(config => {
            const object = new PlanetaryObject(config, this);
            this.$objects.appendChild(object.$el);
            return object;
        });


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