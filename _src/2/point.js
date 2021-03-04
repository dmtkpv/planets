import Utils from './utils'
import PlanetaryOrbit from './orbit'
import PlanetaryBody from './body'



// ----------------------
// Helpers
// ----------------------

const defaults = {
    angle: 0,
    diameter: 0,
    orbits: []
}

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
        if (parent instanceof PlanetaryObject) angle -= parent.angle;
        if (parent instanceof PlanetaryOrbit) angle -= getOrbitAngle(parent.$el);
        parent = parent.parentOrbit || parent.parentObject;
    }
    return angle;
}

function getBodyDuration (orbit) {
    let durations = [];
    while (orbit) {
        if (orbit.animationDuration) durations.push(orbit.animationDuration);
        orbit = orbit.parentObject && orbit.parentObject.parentOrbit
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

export default class PlanetaryObject {

    constructor (config, orbit, system) {

        Object.assign(this, defaults, config);

        this.config = { ...config };
        this.parentOrbit = orbit;

        this.$el = Utils.createElement('planetary-object');
        this.$el.style.setProperty('--angle', this.angle + 'deg');
        this.$el.style.setProperty('--translate', orbit.diameter / 2 + 'px');
        this.$clone = this.$el.cloneNode();

        this.orbits = this.orbits.map(config => {
            return new PlanetaryOrbit(config, this, system);
        });

        if (config.body) {
            this.$body = Utils.createElement('planetary-body');
            this.$body.style.width = this.$body.style.height = config.body.size + 'px';
            this.$body.innerHTML = system.renderBody(config.body);
            this.$body.style.setProperty('--duration', getBodyDuration(orbit)  + 's');
            this.$body.style.setProperty('--angle', getBodyAngle(this) + 'deg');
            system.on('pause:orbit', orbit => restartBody(this));
            system.on('play:orbit', orbit =>  restartBody(this));
        }

    }


    translateTo () {

    }

}