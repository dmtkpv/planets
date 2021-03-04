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

function getBodyAngle (object) {
    let angle = 0;
    while (object) {
        angle -= object.angle;
        object = object.parentOrbit && object.parentOrbit.parentObject;
    }
    return angle;
}

function getBodyDuration (orbit) {
    let durations = [];
    while (orbit) {
        orbit.animationDuration && durations.push(orbit.animationDuration);
        orbit = orbit.parentObject && orbit.parentObject.parentOrbit;
    }
    if (!durations.length) return 0;
    return 1 / durations.reduce((a, b) => a + 1 / b, 0);
}



// ----------------------
// Exports
// ----------------------

export default class PlanetaryObject {

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