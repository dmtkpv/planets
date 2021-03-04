import Utils from './utils'
import Orbit from './orbit'



// ----------------------
// Helpers
// ----------------------

const defaults = {
    angle: 0,
    diameter: 0,
    orbits: []
}

// function getBodyAngle (object) {
//     let angle = 0;
//     while (object) {
//         angle -= object.angle;
//         object = object.parentOrbit && object.parentOrbit.parentObject;
//     }
//     return angle;
// }
//
// function getBodyDuration (orbit) {
//     let durations = [];
//     while (orbit) {
//         orbit.animationDuration && durations.push(orbit.animationDuration);
//         orbit = orbit.parentObject && orbit.parentObject.parentOrbit;
//     }
//     if (!durations.length) return 0;
//     return 1 / durations.reduce((a, b) => a + 1 / b, 0);
// }

function getOrbitAngle ( $el ) {
    const matrix = getComputedStyle($el).getPropertyValue('transform');
    if (!matrix) return 0;
    const values = matrix.split('(')[1].split(')')[0].split(',');
    let radians = Math.atan2(values[1], values[0]);
    if (radians < 0) radians += (2 * Math.PI);
    return radians * 180 / Math.PI;
}

function getBodyAngle (parent) {
    let angle = 0;
    while (parent) {
        if (parent instanceof Point) angle -= parent.angle;
        if (parent instanceof Orbit) angle -= getOrbitAngle(parent.$bodiesEl);
        parent = parent.parentOrbit || parent.parentPoint;
    }
    return angle;
}

function getBodyDuration (orbit) {
    let durations = [];
    while (orbit) {
        if (orbit.animationDuration) durations.push(orbit.animationDuration);
        orbit = orbit.parentPoint && orbit.parentPoint.parentOrbit
    }
    if (!durations.length) return 0;
    return 1 / durations.reduce((a, b) => a + 1 / b, 0);
}

function restartBody (object) {
    object.$body.style.animation = 'none';
    object.$body.offsetHeight;
    object.$body.style.animation = '';
    object.$body.style.setProperty('--angle', getBodyAngle(object) + 'deg');
    object.$body.style.setProperty('--duration', getBodyDuration(object.parentOrbit) + 's');
}



// ----------------------
// Exports
// ----------------------

export default class Point {

    constructor (config, orbit, system, level) {

        Object.assign(this, defaults, config);

        const $el = Utils.createElement(`ps-point ps-level-${level}`);
        $el.style.setProperty('--angle', this.angle + 'deg');
        $el.style.setProperty('--translate', orbit.diameter / 2 + 'px');

        this.$bodiesEl = $el;
        this.$orbitsEl = $el.cloneNode();

        this.parentOrbit = orbit;
        this.orbits = this.orbits.map(config => new Orbit(config, this, system, level + 1));

        if (config.body) {
            this.$body = Utils.createElement('ps-body');
            this.$body.style.width = this.$body.style.height = config.body.size + 'px';
            this.$body.innerHTML = system.renderBody(config.body);
            this.$body.style.setProperty('--duration', getBodyDuration(orbit)  + 's');
            this.$body.style.setProperty('--angle', getBodyAngle(this) + 'deg');
            system.on('pause:orbit', orbit => restartBody(this));
            system.on('play:orbit', orbit =>  restartBody(this));
        }

    }

    move (translate = this.parentOrbit.diameter / 2) {
        this.$bodiesEl.style.setProperty('--translate', translate + 'px');
        this.$orbitsEl.style.setProperty('--translate', translate + 'px');
    }

    update () {
        this.$bodiesEl.style.setProperty('--translate', this.parentOrbit.diameter / 2 + 'px');
        this.$orbitsEl.style.setProperty('--translate', this.parentOrbit.diameter / 2 + 'px');
    }

}