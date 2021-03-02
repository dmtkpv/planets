// --------------------
// Elements
// --------------------

const $system = document.getElementById('system');
const $parent = $system.parentNode;
const $zoom = document.getElementById('zoom');
const $zoomVal = $zoom.querySelector('input');
const $zoomPlus = document.querySelector('button:first-child');
const $zoomMinus = document.querySelector('button:last-child');




// --------------------
// Helpers
// --------------------

function getVar(key) {
    return parseFloat(getComputedStyle($system).getPropertyValue(key));
}

function getHeight (w) {
    const perspective = getVar('--perspective');
    const aDeg = getVar('--angle');
    const aRad = -aDeg * Math.PI / 180;
    const y = w - w * Math.cos(aRad);
    const z = w * Math.sin(aRad);
    return w - w / 2 - (y - w / 2) * perspective / (perspective - z);
}



// --------------------
// Config
// --------------------

const minWidth = getVar('--min-width');
const maxWidth = getVar('--max-width');
const maxHeight = getHeight(maxWidth);
const maxScale = 1;
const minScale = minWidth / maxWidth;
const scaleStep = (maxScale - minScale) / 100;

let scale = 1;
let tx = 0;
let ty = 0;



// --------------------
// Handlers
// --------------------

function update () {
    $system.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`
    $zoomVal.value = Math.round((scale - minScale) / (maxScale - minScale) * 100);
}

function zoom (value) {

    console.log(value);

    scale = Math.max(Math.min(value, maxScale), minScale);
    tx = ($system.parentNode.offsetWidth - maxWidth * scale) / 2;
    ty = ($system.parentNode.offsetHeight - maxHeight * scale) / 2;
    update();
}

function resize () {
    const ws = $parent.offsetWidth / maxWidth;
    const hs = $parent.offsetHeight / maxHeight;
    zoom(Math.min(ws, hs));
}



// --------------------
// Initialization
// --------------------

$system.style.width = maxWidth + 'px';
$system.style.height = maxHeight + 'px';

$zoomPlus.addEventListener('click', () => zoom(scale + scaleStep));
$zoomMinus.addEventListener('click', () => zoom(scale - scaleStep));
window.addEventListener('resize', resize);

resize();