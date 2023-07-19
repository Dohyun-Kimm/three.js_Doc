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

### Loading 3D Model

### Libraries and Plugins
