(() => {

    const $controls = document.querySelector('#controls a');


    $controls.addEventListener('click', () => {
        console.log('sd')
        $controls.parentNode.classList.toggle('active');
    })

})()