(() => {



    // --------------------
    // Planetary system
    // --------------------

    const $system = document.getElementById('system');
    const system = new PlanetarySystem($system, planetaryConfig);
    const sun = system.orbits[0].points[0];
    const $nav = document.getElementById('nav');
    const $note = document.getElementById('note');
    let $links = [];

    const planets = system.orbits.slice(1).map(orbit => orbit.points).flat();
    const moons = planets.map(planet => planet.orbits.map(orbit => orbit.points).flat()).flat();
    let active = -1;


    // note

    function showNote (body) {
        const $h1 = $note.querySelector('h1');
        const $p = $note.querySelector('p');
        $h1.textContent = body.title;
        if (body.note) $p.textContent = body.note;
        $note.style.display = 'block';
    }

    function hideNote () {
        $note.style.display = 'none'
    }

    $note.querySelector('a').addEventListener('click', () => {
        hideNote();
    })

    document.addEventListener('click', event => {
        let parent = event.target;
        while (parent) {
            if (parent === $note) return;
            parent = parent.parentNode;
        }
        hideNote();
    })


    // planets

    function activate (index) {
        active = index;
        planets[active].$bodiesEl.classList.add('active');
        planets[active].$orbitsEl.classList.add('active');
        planets[active].move(0);

        planets[active].orbits.forEach(orbit => {
            orbit.setDiameter(800);
            orbit.points.forEach(point => point.update());
        })

        $links[active].classList.add('active');
        $system.classList.add('active');
        sun.move(1200);
    }

    function deactivate () {
        if (!planets[active]) return;
        planets[active].$bodiesEl.classList.remove('active');
        planets[active].$orbitsEl.classList.remove('active');
        planets[active].$bodiesEl.classList.remove('hover');
        planets[active].$orbitsEl.classList.remove('hover');
        planets[active].move();
        $links[active].classList.remove('active');
        $system.classList.remove('active');
        sun.move();
        active = -1;
    }

    sun.$bodiesEl.addEventListener('click', () => {
        deactivate();
    })

    planets.forEach((planet, index) => {

        planet.$bodiesEl.addEventListener('mouseenter', () => {
            if (active !== -1) return;
            planet.$bodiesEl.classList.add('hover');
            planet.$orbitsEl.classList.add('hover');
        })

        planet.$bodiesEl.addEventListener('mouseleave', () => {
            if (active !== -1) return;
            planet.$bodiesEl.classList.remove('hover');
            planet.$orbitsEl.classList.remove('hover');
        })

        planet.$bodiesEl.addEventListener('click', () => {
            if (active === index) return showNote(planet.body);

            system.orbits.forEach(orbit => {
                orbit.setDiameter(orbit.diameter * 2);
                planets.forEach(planet => planet.update());
                // if (orbit !== planet.parentOrbit) orbit.setDiameter(orbit.diameter * 2);
            })

            // console.log(planet)

            deactivate();
            activate(index);
        })

        const $link = $nav.appendChild(document.createElement('button'));
        $link.textContent = planet.body.title;
        $link.addEventListener('click', () => planet.$bodiesEl.click());
        $links.push($link);

    })

    moons.forEach(moon => {
        moon.$bodiesEl.addEventListener('click', event => {
            event.stopPropagation();
            showNote(moon.body);
        })
    })



    // --------------------
    // Zoom
    // --------------------

    const $zoomVal = document.querySelector('#zoom input');
    const $zoomIn = document.querySelector('#zoom button:first-child');
    const $zoomOut = document.querySelector('#zoom button:last-child');

    $zoomVal.value = Math.round(system.zoom.value);

    system.on('zoom', () => {
        $zoomVal.value = Math.round(system.zoom.value);
    })

    $zoomIn.addEventListener('click', () => {
        system.zoomTo(system.zoom.value + 1);
    });

    $zoomOut.addEventListener('click', () => {
        system.zoomTo(system.zoom.value - 1);
    });

    $system.addEventListener('wheel', event => {
        const delta = event.deltaY > 0 ? -1 : 1;
        system.zoomTo(system.zoom.value + delta);
        event.preventDefault();
    })

    window.addEventListener('resize', () => {
        system.resize();
    });



    // --------------------
    // Movement
    // --------------------

    let drag = false;

    $system.addEventListener('mousedown', event => {
        drag = {
            pageX: event.pageX,
            pageY: event.pageY,
            systemX: system.translate.x,
            systemY: system.translate.y
        }
    })

    document.addEventListener('mousemove', event => {
        if (!drag) return;
        const x = drag.systemX + event.pageX - drag.pageX;
        const y = drag.systemY + event.pageY - drag.pageY;
        system.translateTo(x, y);
    })

    document.addEventListener('mouseup', () => {
        drag = false;
    })

    document.addEventListener('mouseleave', () => {
        drag = false;
    })



    const $play = document.getElementById('play');

    $play.addEventListener('click', () => {
        const active = $play.classList.contains('active');
        $play.classList.toggle('active');
        system.orbits.forEach(orbit => active ? orbit.play() : orbit.pause());
    })



    // --------------------
    // Controls
    // --------------------

    const $controls = document.querySelector('#controls a');

    $controls.addEventListener('click', () => {
        $controls.parentNode.classList.toggle('active');
    })


    
    // --------------------
    // Stars
    // --------------------

    const stars = 300;
    const $stars = document.querySelector('#stars');

    for (let i = 0; i < stars; i++) {
        const $star = document.createElement('div');
        const size = Math.random() * 4;
        $star.style.left = $stars.offsetWidth * Math.random() + 'px';
        $star.style.top = $stars.offsetHeight * Math.random() + 'px';
        $star.style.width = $star.style.height = size + 'px';
        $star.style.animationDuration = 2 + Math.random() * 2 + 's'
        $star.style.animationDelay = -Math.random() * 4 + 's';
        $stars.appendChild($star);
    }



})()