import './styles.css'
import Utils from './utils'
import Orbit from './orbit'

export default class PlanetarySystem {



    // ----------------------
    // Constructor
    // ----------------------

    constructor (selector, { camera, canvas, renderBody, orbits }) {


        // config

        this.events = {};
        this.camera = camera;
        this.renderBody = renderBody;

        this.zoom = {};
        this.zoom.max = 1;

        this.width = {};
        this.width.max = canvas.maxWidth;
        this.width.min = canvas.minWidth;

        this.height = {};
        this.height.max = Utils.getHeight(this.width.max, camera);


        // scene

        this.$scene = document.querySelector(selector);
        this.$scene.classList.add('ps-scene');
        this.$scene.style.width = this.width.max + 'px';
        this.$scene.style.height = this.height.max + 'px';
        this.$scene.style.setProperty('--camera-angle', this.camera.angle + 'deg');


        // orbits

        this.$orbits = Utils.createElement('ps-canvas ps-canvas--orbits')
        this.$orbits.style.transform = `perspective(${camera.perspective}px) translateY(50%) rotateX(${camera.angle}deg) translateY(-50%)`;
        this.$scene.appendChild(this.$orbits);


        // bodies

        this.$bodies = Utils.createElement('ps-canvas ps-canvas--bodies')
        this.$bodies.style.transform = `perspective(${camera.perspective}px) translateY(50%) rotateX(${camera.angle}deg) translateY(-50%)`;
        this.$scene.appendChild(this.$bodies);


        // renderer

        function renderOrbits ($parent, orbit) {
            $parent.appendChild(orbit.$orbitsEl);
            orbit.points.forEach(point => {
                orbit.$orbitsEl.appendChild(point.$orbitsEl);
                point.orbits.forEach(orbit => renderOrbits(orbit.$orbitsEl, orbit));
            })
        }

        function renderBodies ($parent, orbit) {
            $parent.appendChild(orbit.$bodiesEl);
            orbit.points.forEach(point => {
                point.$body && point.$bodiesEl.appendChild(point.$body);
                orbit.$bodiesEl.appendChild(point.$bodiesEl);
                point.orbits.forEach(orbit => renderBodies(point.$bodiesEl, orbit));
            })
        }

        this.orbits = orbits.map(config => {
            return new Orbit(config, null, this);
        });

        this.orbits.forEach(orbit => {
            renderOrbits(this.$orbits, orbit);
            // renderBodies(this.$bodies, orbit);
        });


        // resize

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