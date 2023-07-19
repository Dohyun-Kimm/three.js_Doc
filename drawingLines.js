import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

// creating Scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

// define a material, LineBasicMaterial or LineDashedMaterial

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
// material need geomatry with soem vertices
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(-10, 0, 0));
const geometry = new THREE.BufferGeometry().setFromPoints(points);
// lines are drawn between each pair of vertices

const line = new THREE.Line(geometry, material); // Line not Mesh
scene.add(line);
renderer.render(scene, camera);
