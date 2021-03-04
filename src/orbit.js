import Utils from './utils'
import Point from './point'



// ----------------------
// Helpers
// ----------------------

const defaults = {
    diameter: 0,
    animationDuration: 0,
    points: []
}



// ----------------------
// Exports
// ----------------------

export default class Orbit {

    constructor (config, object, system) {

        Object.assign(this, defaults, config);

        const $el = Utils.createElement('ps-orbit');
        $el.style.width = this.diameter + 'px';
        $el.style.height = this.diameter + 'px';
        $el.style.animationDuration = this.animationDuration + 's';

        this.$bodiesEl = $el;
        this.$orbitsEl = $el.cloneNode();

        this.parentObject = object;
        this.points = this.points.map(config => new Point(config, this, system));

    }

}