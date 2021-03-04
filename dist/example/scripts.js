(() => {



    // --------------------
    // Planetary system
    // --------------------

    const $system = document.getElementById('system');
    const system = new PlanetarySystem($system, planetaryConfig);
    const sun = system.orbits[0].points[0];
    const planets = system.orbits.slice(1).map(orbit => orbit.points).flat();

    let active = null;

    function activate (planet) {
        active = planet;
        planet.$bodiesEl.classList.add('active');
        planet.$orbitsEl.classList.add('active');
        planet.move(0);
        sun.move(1200);
    }

    function deactivate () {
        if (!active) return;
        active.$bodiesEl.classList.remove('active');
        active.$orbitsEl.classList.remove('active');
        active.move();
        sun.move();
    }

    sun.$bodiesEl.addEventListener('click', () => {
        deactivate();
    })

    planets.forEach(planet => {

        planet.$bodiesEl.addEventListener('mouseenter', () => {
            planet.$bodiesEl.classList.add('hover');
            planet.$orbitsEl.classList.add('hover');
        })

        planet.$bodiesEl.addEventListener('mouseleave', () => {
            planet.$bodiesEl.classList.remove('hover');
            planet.$orbitsEl.classList.remove('hover');
        })

        planet.$bodiesEl.addEventListener('click', () => {
            deactivate();
            if (active !== planet) activate(planet);
            else active = null;
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

    $system.addEventListener('mousemove', event => {
        if (!drag) return;
        const x = drag.systemX + event.pageX - drag.pageX;
        const y = drag.systemY + event.pageY - drag.pageY;
        system.translateTo(x, y);
    })

    $system.addEventListener('mouseup', () => {
        drag = false;
    })



})()