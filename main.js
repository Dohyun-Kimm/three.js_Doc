import WebGL from "three/addons/capabilities/WebGL.js";
import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75, // Field of View 75degree
//   window.innerWidth / window.innerHeight, //aspect ratio - 이걸써야 뭉개지지 않음.
//   0.1, // near객체로부터 카메라의 거리 너무 가깝거나 멀면 랜더링이 안된다.
//   100 //   far 카메라와 객체 사이의 거리...?
// );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight); // 인수 조정으로 해상도 조절 할 수 있음.

// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material); // Mesh = Geometry + Material
// cube.rotation.x += 0; // row line horizontal axis
// cube.rotation.y += 0.3; // vertical axis

// scene.add(cube);

// camera.position.z = 5;

// // Rendering
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera); // 장면과 카메라를 렌더링 하는것
// }

// if (WebGL.isWebGLAvailable()) {
//   // Initiate function or other initializations here
//   animate();
// } else {
//   const warning = WebGL.getWebGLErrorMessage();
//   document.getElementById("container").appendChild(warning);
// }

// Renderder
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// html 하위태그에 추가
document.body.appendChild(renderer);
// Camera 추가하기
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
const scene = new THREE.Scene();
