(() => {



    // --------------------
    // Planetary system
    // --------------------

    const system = new PlanetarySystem('#system', planetaryConfig);
    // const sun = system.orbits[0].points[0];
    // const planets = system.orbits.slice(1).map(orbit => orbit.objects).flat();
    //
    // let active = null;
    //
    // planets.forEach(planet => {
    //
    //     planet.$el.addEventListener('mouseenter', () => {
    //         planet.$el.classList.add('active');
    //         planet.$clone.classList.add('active');
    //     })
    //
    //     planet.$el.addEventListener('mouseleave', () => {
    //         planet.$el.classList.remove('active');
    //         planet.$clone.classList.remove('active');
    //     })
    //
    //     planet.$el.addEventListener('click', () => {
    //         planet.$el.classList.remove('active');
    //         planet.$clone.classList.remove('active');
    //     })
    //
    // })
    //
    // sun.$el.addEventListener('click', () => {
    //
    // })
    //
    //
    // const $controls = document.querySelector('#controls a');
    //
    //
    // $controls.addEventListener('click', () => {
    //     console.log('sd')
    //     $controls.parentNode.classList.toggle('active');
    // })

    // console.log(planets);


    // // const sun = system.orbits[0].objects[0];
    // let active = null;
    //
    //
    // system.orbits.forEach(orbit => {
    //
    //     orbit.objects.forEach(object => {
    //
    //
    //         object.$body.addEventListener('mouseenter', () => {
    //             if (object === sun) return;
    //             system.orbits.forEach(orbit => orbit.pause());
    //             object.$el.classList.add('hovered');
    //         })
    //
    //         object.$body.addEventListener('mouseleave', () => {
    //             if (object === sun) return;
    //             system.orbits.forEach(orbit => orbit.play());
    //             object.$el.classList.remove('hovered');
    //         })
    //
    //         object.$body.addEventListener('click', () => {
    //
    //             if (object === sun && !active) return;
    //
    //             if (object === sun) {
    //                 sun.$el.style.transform = `rotateZ(${object.angle}deg) translateX(0px)`;
    //                 active.$el.classList.remove('active');
    //                 active.$el.style.transform = `rotateZ(${active.angle}deg) translateX(${active.parentOrbit.diameter / 2}px)`;
    //                 active = null;
    //                 return
    //             }
    //
    //
    //             if (active) {
    //                 active.$el.classList.remove('active');
    //                 active.$el.style.transform = `rotateZ(${active.angle}deg) translateX(${active.parentOrbit.diameter / 2}px)`;
    //             }
    //             if (active !== object) {
    //                 active = object;
    //                 object.$el.classList.add('active');
    //                 object.$el.style.transform = `rotateZ(${object.angle}deg) translateX(0)`;
    //                 sun.$el.style.transform = `rotateZ(${sun.angle}deg) translateX(${1200}px)`;
    //             }
    //             else {
    //                 sun.$el.style.transform = `rotateZ(${sun.angle}deg) translateX(${0}px)`;
    //             }
    //
    //
    //             //
    //             // if (active) {
    //             //     active.$el.classList.remove('active');
    //             //     active.$el.style.transform = `rotateZ(${active.angle}deg) translateX(${active.parentOrbit.diameter / 2}px)`;
    //             // }
    //             // if (active === object) {
    //             //     active = null;
    //             // }
    //             // else {
    //             //     active = object;
    //             //     object.$el.classList.add('active');
    //             //     object.$el.style.transform = `rotateZ(${object.angle}deg) translateX(0)`;
    //             // }
    //             // if (active) {
    //             //     sun.$el.style.transform = `rotateZ(${object.angle}deg) translateX(${1200}px)`;
    //             // }
    //             //
    //
    //             //
    //             // if (object.$el.classList.contains('active')) {
    //             //     object.$el.style.transform = `rotateZ(${object.angle}deg) translateX(${object.parentOrbit.diameter / 2}px)`;
    //             // }
    //             // else {
    //             //     object.$el.style.transform = `rotateZ(${object.angle}deg) translateX(0)`;
    //             // }
    //             // object.$el.classList.toggle('active');
    //         })
    //
    //     })
    //
    // })







    // --------------------
    // Zoom
    // --------------------

    // const $zoomVal = document.querySelector('#zoom input');
    // const $zoomIn = document.querySelector('#zoom button:first-child');
    // const $zoomOut = document.querySelector('#zoom button:last-child');
    //
    // system.on('zoom', () => {
    //     $zoomVal.value = Math.round(system.zoom.value);
    // })
    //
    // $zoomIn.addEventListener('click', () => {
    //     system.setZoom(system.zoom.value + 1);
    // });
    //
    // $zoomOut.addEventListener('click', () => {
    //     system.setZoom(system.zoom.value - 1);
    // });
    //
    //
    //
    // // --------------------
    // // Hover
    // // --------------------
    //
    // // system.on('zoom', () => {
    // //     $zoomVal.value = Math.round(system.zoom.value);
    // // })
    //
    //
    //
    //
    //
    // // --------------------
    // // Resize
    // // --------------------
    //
    // window.addEventListener('resize', () => {
    //     system.resize();
    // });
    //
    // system.resize();

})()