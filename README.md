# Three js Doc

## Manual

### Creating Scene

html 태그의 자식으로 renderer를 추가해주어야한다.

Camera 와 Scene으로 랜더링할 화면이 구성된다.
랜더링 할 객체(renderer) 안에 Camera와 Scene을 추가하고, render() 매서드를 통해 랜더링 한다.

객체는 Geometry와 material로 이루어져 있다. 이 둘을 Mesh에 담고, Mesh를 Scene에 올리면 onject가 랜더링이 된다.

### WebGL compatibility check

WebGL을 지원하지 않는 브러우저나 디바이스가 간혹 있다. 따라서 WebGL 지원 여부에 대한 메세지를 추가해주는 것이 좋다.

### Drawing lines

Mesh를 사용하지 않고 선이나 원을 그리는 방법.
Mesh를 구현할때와 마찬가지로, Renderer을 먼저 만들고 index.html의 body태그의 하위로 추가한다.
Scene을 구성한 다음,
LineBasicMaterial 매서드를 사용해 선의 색을 지정한 material을 선언한다.
BufferGeometry 매서드를 사용해 선을 이을 점들의 좌표를 지정한 points를 만들고
이 점들을 setFromPoints 매서드를 사용해 geometry변수에 담는다.

geometry와 material을 line에 합쳐서 Scene에 올리고 Scene을 renderer에 추가하면 아래와 같은 그림이 나오는 것을 확인 할 수 있다.

### Creating text

Three.js에 텍스트를 얹는 방법.

1. DOM + CSS
2. Use CSS2DRenderer or CSS3DRenderer
3. Draw text to canvas and use as a Texture
4. Create a model in your favourite 3D application and export to three.js(Blender)
5. Procedural Text Geometry.
6. Bitmap Fonts
7. Troika Text

### Loading 3D Model

서로 다른 목적이나 특징, 복잡도를 가진 다양한 파일 형식의 3D 모델을 지원한다. 하지만 올바른 포멧이나 workflow를 선택하는 것이 중요하다. Three.js에서 권장하는 workflow가 있다.
되도록이면 glTF(GL Transmission Format) 형식을 권장한다. .GLB와 .GLTF 모두 지원한다. glTF는 런타임 전송에 특화되어 전송과 로딩 속도가 빠르다.
Sketchfab과 같은 사이트에서 공용 도메인 glTF파일을 사용할 수 있다.
모델 추출 할 수 있는 툴

- Blender
- Substance Painter
- Modo
- Toolbag
- Houdini
- Cinema 4D
- COLLADA2GLTF
- FBX2GLTX
- OBJ2GLTF

==> 연습 코드에서 오류는 없지만 3d 객체가 랜더링 되지 않음.
Scene에 올라가 있고, 카메라도 있고, 빛이 없어서 안되는건가했지만 빛도 있음....안타나나는 이유 찾는중....
해결 방법:
랜더링이 되고 있었는데 너무 작아서 안보였다.카메라 거리를 조절 하다 보니 콩알만한 크기의 랜더링 된 물체를 찾을 수 있었다. 로딩한 파일은 gltf.scene에 저장되어있기 때문에 gltf.scene.scale.multiplyScalar() 매서드를 통해 객체를 키울수 있었다.

### Libraries and Plugins
