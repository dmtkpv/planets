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

    constructor (config, object, system, level) {

        Object.assign(this, defaults, config);

        const $el = Utils.createElement(`ps-orbit ps-level-${level}`);
        $el.style.width = this.diameter + 'px';
        $el.style.height = this.diameter + 'px';
        $el.style.animationDuration = this.animationDuration + 's';

        this.level = level;
        this.$bodiesEl = $el;
        this.$orbitsEl = $el.cloneNode();

        this.parentObject = object;
        this.points = this.points.map(config => new Point(config, this, system, level));

    }

}