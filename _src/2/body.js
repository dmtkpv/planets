import Utils from './utils';

export default class PlanetaryBody {

    constructor (config) {
        this.$body = Utils.createElement('planetary-body');
        this.$body.style.width = this.$body.style.height = config.body.size + 'px';
        this.$body.innerHTML = system.renderBody(config.body);
        this.$body.style.setProperty('--duration', getBodyDuration(orbit)  + 's');
        this.$body.style.setProperty('--angle', getBodyAngle(this) + 'deg');
        system.on('pause:orbit', orbit => restartBody(this));
        system.on('play:orbit', orbit =>  restartBody(this));
        this.$el.appendChild(this.$body);
    }

}