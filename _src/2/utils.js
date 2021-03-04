export default {

    getHeight (width, { perspective, angle }) {
        const a = -angle * Math.PI / 180;
        const y = width - width * Math.cos(a);
        const z = width * Math.sin(a);
        return width - width / 2 - (y - width / 2) * perspective / (perspective - z);
    },

    createElement (className) {
        const $div = document.createElement('div');
        $div.className = className;
        return $div;
    },

    clone (object) {
        return JSON.parse(JSON.stringify(object));
    }

}
