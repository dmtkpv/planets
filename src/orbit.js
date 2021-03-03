import Utils from './utils'
import PlanetaryObject from './object'



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

        this.$el = Utils.createElement('planetary-orbit');
        this.$el.style.width = this.diameter + 'px';
        this.$el.style.height = this.diameter + 'px';
        this.$el.style.animationDuration = this.animationDuration + 's';

        this.objects = this.objects.map(config => new PlanetaryObject(config, this, system));

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