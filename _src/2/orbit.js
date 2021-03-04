import Utils from './utils'
import Point from './point'



// ----------------------
// Helpers
// ----------------------

const defaults = {
    diameter: 0,
    animationDuration: 0,
    objects: []
}



// ----------------------
// Exports
// ----------------------

export default class PlanetaryOrbit {

    constructor (config, object, system) {

        Object.assign(this, defaults, config);

        this.config = { ...config };
        this.parentObject = object;

        const $el = Utils.createElement('ps-orbit');
        $el.style.width = this.diameter + 'px';
        $el.style.height = this.diameter + 'px';
        $el.style.animationDuration = this.animationDuration + 's';

        this.$elBodies = $el
        this.$elOrbits = $el.cloneNode();

        this.points = this.points.map(config => new PlanetaryObject(config, this, system));

    }

    pause () {
        this.$el.style.animationPlayState = 'paused'
        this.animationDuration = 0;
        system.emit('pause:orbit', this);
    }

    play () {
        this.$el.style.animationPlayState = ''
        this.animationDuration = this.config.animationDuration;
        system.emit('play:orbit', this);
    }

}