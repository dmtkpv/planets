function createRing () {
    const $ring = document.createElement('div');
    $ring.style.width = diameter + 'px';
    $ring.style.height = diameter + 'px';
    $ring.style.marginLeft = -diameter / 2 + 'px';
    $ring.style.marginTop = -diameter / 2 + 'px';
    $ring.classList.add('planetary-ring');
    return $ring;
}

function createSpin () {

}

function createSystem () {

}

function createObject () {

}


class Ring {
    constructor () {
        this.index = index;
        this.max = data.length - 1;
        this.step = this.width.max / Ring.max;
        this.diameter = this.width.max - (Ring.max - Ring.index) * this.width.max / Ring.max;
    }
}


export default function (data) {



    data.forEach((planets, index) => {

        const ring = new Ring(data, index, this.width.max);

        //
        // let Ring = {};
        // Ring.index = index;
        // Ring.max = data.length - 1;
        // Ring.step = this.width.max / Ring.max;
        // Ring.diameter = this.width.max - (Ring.max - Ring.index) * this.width.max / Ring.max;


        const diameter = this.width.max - (maxLevel - levelIndex) * this.width.max / maxLevel;
        const $orbit = document.createElement('div');
        $orbit.style.width = diameter + 'px';
        $orbit.style.height = diameter + 'px';
        $orbit.style.marginLeft = -diameter / 2 + 'px';
        $orbit.style.marginTop = -diameter / 2 + 'px';
        $orbit.classList.add('planetary-orbit');
        this.$camera.appendChild($orbit);


        const $spin = document.createElement('div');
        $spin.style.width = levelSize + 'px';
        $spin.style.height = levelSize + 'px';
        $spin.style.marginLeft = -levelSize / 2 + 'px';
        $spin.style.marginTop = -levelSize / 2 + 'px';
        $spin.classList.add('planetary-spin');
        this.$camera.appendChild($spin);


        level.forEach((planet, planetIndex) => {

            const rotate = planetIndex / (level.length - 1) * 360;
            const translate = diameter / 2;

            const $planet = document.createElement('div');
            $planet.classList.add('planetary-planet');
            $planet.style.transform = `rotate(${rotate}deg) translate(${translate}px)`;
            $spin.appendChild($planet);

            planet.moons && planet.moons.forEach((moonLevel, moonLevelIndex) => {
                const diameter = this.width.max - (maxLevel - levelIndex) * this.width.max / maxLevel;
                // add orbit
                // add spin


                moonLevel.forEach($moon => {
                    // add moon
                })
            })

        })


    })

}