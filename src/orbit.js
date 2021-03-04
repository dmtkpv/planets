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



function restartAnimation (orbit) {
    this.$bodiesEl.style.animation = 'none';
    this.$bodiesEl.offsetHeight;
    this.$bodiesEl.style.animationDuration = orbit.animationDuration;
}


// ----------------------
// Exports
// ----------------------

export default class Orbit {

    constructor (config, point, system, level) {

        Object.assign(this, defaults, config);

        const $el = Utils.createElement(`ps-orbit ps-level-${level}`);
        $el.style.width = this.diameter + 'px';
        $el.style.height = this.diameter + 'px';
        $el.style.animationDuration = this.animationDuration + 's';

        this.level = level;
        this.system = system;
        this.config = { ...config };
        this.$bodiesEl = $el;
        this.$orbitsEl = $el.cloneNode();

        this.parentPoint = point;
        this.points = this.points.map(config => new Point(config, this, system, level));

    }

    setDiameter (diameter) {
        this.diameter = diameter;
        this.$bodiesEl.style.width = this.$orbitsEl.style.width = this.diameter + 'px';
        this.$bodiesEl.style.height = this.$orbitsEl.style.height = this.diameter + 'px';
    }

    // update () {
    //     this.$bodiesEl.style.animationDuration = this.animationDuration + 's';
    //     this.$bodiesEl.style.animationDuration = this.animationDuration + 's';
    //
    //     // / this.animationDuration = 0;
    //     // this.system.emit('pause:orbit', this);
    // }


    pause () {
        this.$bodiesEl.style.animationPlayState = 'paused'
        this.$orbitsEl.style.animationPlayState = 'paused'
        this.animationDuration = 0;
        this.system.emit('pause:orbit', this);
    }

    play () {
        this.$bodiesEl.style.animationPlayState = ''
        this.$orbitsEl.style.animationPlayState = ''
        this.animationDuration = this.config.animationDuration;
        this.system.emit('play:orbit', this);
    }

}