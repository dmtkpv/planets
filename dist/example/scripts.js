(() => {



    // --------------------
    // Planetary system
    // --------------------

    const $system = document.getElementById('system');
    const system = new PlanetarySystem($system, planetaryConfig);
    const sun = system.orbits[0].points[0];
    const $nav = document.getElementById('nav');
    let $links = [];

    const planets = system.orbits.slice(1).map(orbit => orbit.points).flat();
    const moons = planets.map(planet => planet.orbits.map(orbit => orbit.points).flat()).flat();
    let active = -1;

    function activate (index) {
        active = index;
        planets[active].$bodiesEl.classList.add('active');
        planets[active].$orbitsEl.classList.add('active');
        planets[active].move(0);
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
            deactivate();
            if (active !== index) activate(index);
            else active = -1;
        })

        const $link = $nav.appendChild(document.createElement('button'));
        $link.textContent = planet.body.title;
        $link.addEventListener('click', () => planet.$bodiesEl.click());
        $links.push($link);

    })

    moons.forEach(moon => {
        moon.$bodiesEl.addEventListener('click', event => {
            event.stopPropagation();
            console.log(moon.body.note);
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



})()