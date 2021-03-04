export default class Cluster {

    constructor (config) {

        this.$el = document.createElement('div');
        this.$el.style.top = 0;
        this.$el.style.left = 0;
        this.$el.style.width = 200 + 'px';
        this.$el.style.height = 200 + 'px';
        this.$el.classList.add('planetary-cluster')

        console.log(config)
    }

}