import Utils from './utils'



// ----------------------
// Configs
// ----------------------

const defaultConfig = {
    rotateZ: 0,
    translateX: 0,
    animationDuration: 0,
    body: null,
    objects: []
}

const defaultDepth = {
    rotateZ: [],
    animationDuration: [],
}



// ----------------------
// Exports
// ----------------------

export default class PlanetaryObject {

    constructor (config, system, depth = defaultDepth) {

        Object.assign(this, defaultConfig, config);

        this.$el = Utils.createElement('planetary-object');
        this.$el.style.setProperty('--duration', this.animationDuration + 's');
        this.$el.style.setProperty('--translateX', this.translateX + 'px');
        this.$el.style.setProperty('--rotateZ', this.rotateZ + 'deg');

        depth = Utils.clone(depth);
        depth.rotateZ.push(this.rotateZ);
        depth.animationDuration.push(this.animationDuration);

        if (this.body) {
            const rotateZ = depth.rotateZ.reduce((a, b) => a + b);
            const durations = depth.animationDuration.filter(value => value > 0);
            const duration = 1 / durations.reduce((a, b) => a + 1 / b, 0);
            this.$body = Utils.createElement('planetary-body');
            this.$body.style.width = this.body.size + 'px';
            this.$body.style.height = this.body.size + 'px';
            this.$body.style.setProperty('--duration', duration + 's');
            this.$body.style.setProperty('--rotateZ', -rotateZ + 'deg');

            if (this.body.image) {
                const $img = document.createElement('img');
                $img.src = this.body.image;
                this.$body.appendChild($img);
            }

            this.$el.appendChild(this.$body);
        }

        this.objects = this.objects.map(config => {
            const object = new PlanetaryObject(config, system, depth);
            this.$el.appendChild(object.$el);
            return object;
        });

    }

    pause () {
        this.$el.style.animationPlayState = 'paused';
        this.objects.forEach(object => {

        })
    }

    play () {
        this.$el.style.animationPlayState = '';
    }

}