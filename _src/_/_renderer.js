function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// --------------------
// Ring
// --------------------

class Ring {

    constructor (index, maxIndex, maxWidth, offset = 0) {
        this.diameter = maxWidth - (maxIndex - index) * maxWidth / maxIndex - offset;
        this.diameter = Math.max(this.diameter, 0)
        this.$el = document.createElement('div');
        this.$el.style.width = this.diameter + 'px';
        this.$el.style.height = this.diameter + 'px';
        this.$el.style.marginLeft = -this.diameter / 2 + 'px';
        this.$el.style.marginTop = -this.diameter / 2 + 'px';
        this.$el.classList.add('planetary-ring');
    }

}



// --------------------
// Spin
// --------------------

class Spin {

    constructor (size) {
        this.size = size;
        this.$el = document.createElement('div');
        this.$el.style.width = this.size + 'px';
        this.$el.style.height = this.size + 'px';
        this.$el.classList.add('planetary-spin');
    }

}



// --------------------
// Place
// --------------------

class Place {

    constructor (index, maxIndex, size, distance) {
        this.angle = index / maxIndex * 360 || 0;
        // this.angle = 57;
        this.translate = distance;
        this.size = size;
        this.$el = document.createElement('div');
        this.$el.style.width = this.size + 'px';
        this.$el.style.height = this.size + 'px';
        this.$el.style.marginLeft = -this.size / 2 + 'px';
        this.$el.style.marginTop = -this.size / 2 + 'px';
        this.$el.style.transform = `rotate(${this.angle}deg) translate(${this.translate}px)`;
        this.$el.classList.add('planetary-place');
    }

}



// --------------------
// Planet
// --------------------

class Planet {

    constructor (planet, angleX, angleZ) {
        this.$el = document.createElement('div');
        this.$el.classList.add('planetary-spin-reverse');
        this.$reverse = document.createElement('div');
        this.$reverse.classList.add('planetary-spin-reverse');
        this.$planet = document.createElement('div');
        this.$planet.classList.add('planetary-planet');
        this.$planet.style.transform = `rotateZ(-${angleZ}deg) rotateX(-${angleX}deg) `
        // this.$planet.textContent = 'Hi!'
        this.$planet.style.background = getRandomColor();

        this.$reverse.appendChild(this.$planet);
        this.$el.appendChild(this.$reverse);


    }

}



// --------------------
// Exports
// --------------------

/*

    sunRing (border around the sun)
    sunSpin (rotation around the sun)
        - planetPlace (place planet on sunRing)
            - planetObject (planet)
            - planetRing (border around the planet)
            - planetSpin (rotation around the planet)
                - moonPlace (place moon on planetRing)
                    - moonObject (moon)




*/




export default function (data) {

    const sunRingMax = data.length - 1;
    const clusterSize = this.width.max / sunRingMax / 2;

    console.log(sunRingMax, clusterSize)

    // console.log(this.width.max, sunRingMax, sunRingSpace)

    data.forEach((orbit, index) => {



        const sunRing = new Ring(index, sunRingMax, this.width.max, clusterSize);
        const sunSpin = new Spin(this.width.max);

        this.$camera.appendChild(sunRing.$el);
        this.$camera.appendChild(sunSpin.$el);

        orbit.forEach((cluster, index) => {


            const clusterPlace = new Place(index, orbit.length, clusterSize, sunRing.diameter / 2);
            sunSpin.$el.appendChild(clusterPlace.$el);

            // console.log(clusterPlace)

            cluster.forEach((orbit, index) => {
                const planetRing = new Ring(index, cluster.length - 1, clusterSize, 0);



                const planetSpin = new Spin(clusterPlace.size);
                planetRing.$el.style.opacity = .4;
                clusterPlace.$el.appendChild(planetRing.$el);
                clusterPlace.$el.appendChild(planetSpin.$el);

                console.log('-----');

                orbit.forEach((planet, index) => {



                    const planetPlace = new Place(index, orbit.length, planet.size, planetRing.diameter / 2);
                    console.log(index, orbit.length - 1)
                    console.log(planetPlace);


                    const object = new Planet(planet, this.camera.angle, clusterPlace.angle + planetPlace.angle);
                    planetPlace.$el.appendChild(object.$el)
                    planetSpin.$el.appendChild(planetPlace.$el);
                })

            })

        })


    })
}