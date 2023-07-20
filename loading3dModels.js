import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as THREE from "three";

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.001,
  1000
);
camera.position.set(1.5, 4, 100);
camera.lookAt(0, 0, 0);

// scene
const scene = new THREE.Scene();
scene.add(camera);
//light
const directionalLight = new THREE.DirectionalLight("white", 1);
directionalLight.position.x = 1;
directionalLight.position.z = 2;
scene.add(directionalLight);

// loading 3d model
const loader = new GLTFLoader();

loader.load(
  `assets/bike/scene.gltf`, // model 위치
  function (gltf) {
    console.log(scene);
    gltf.scene.scale.multiplyScalar(20);

    scene.add(gltf.scene);
    renderer.render(scene, camera);
  },
  undefined,
  function (error) {
    console.log(error);
  }
);
// renderer.render(scene, camera);
