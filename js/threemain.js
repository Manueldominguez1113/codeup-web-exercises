/*
const scene =new THREE.scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const Renderer = new THREE.WebGLRenderer();

Renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(Renderer.domElement);
*/

function main() {
    const canvas = document.querySelector("#glCanvas");
    // Initialize the GL context
    const gl = canvas.getContext("webgl");
    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;}