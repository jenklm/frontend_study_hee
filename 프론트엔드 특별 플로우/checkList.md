1. 나는 component를 나누는 나만의 기준이 있으며, 반드시 나누는 기준에 대해서도 알고 있다. <br>

A. 재사용성 2.단일책임원칙(각 컴포넌트는 하나의 기능만 사용,유지보수 간단) 3. 가독성 4. UI 요소(디자인 변경, 유지보수 시 유연성 제공)
<br>

2. 나는 hook 함수의 종류와 기능, 어느 순간 사용 해야할지 정의할 수 있다. <br>

A. hook 함수 장점 : 빠른 성능. 로직 재사용 가능. 컴포넌트 분리 단점 : 호출 순서 의존성.
<br>

3. 나는 전역 상태 관리를 하는 방법의 종류와 어느 순간 전역 상태를 관리해야할지 단순 설명뿐이 아니라 판단할 수 있다. <br>

A. 데이터를 일관되게 사용하거나 코드를 재사용하기 위해 전역 상태 관리를 사용해야 함. props drilling이 일어날 때와 부모가 알 필요 없는 값을 알고 있을 때.
<br>

4. 나는 CRUD를 활용한 상태 변경과 UI 변경 시점에 따른 리랜더링을 자유롭게 다룰 수 있다.<br>

5. 나는 중첩 객체 배열의 CRUD와 상태 변화를 자유롭게 다룰 수 있다.<br>
A. 중첩 객체 배열에서 내부 객체를 수정할 때, 외부 객체만 복사해서 덮어씌울 경우, react는 내부 객체가 바뀌었음을 감지하지 못해서 리렌더링이 일어나지 않는다.
<br>

6. 나는 재사용이 가능한 컴포넌트를 만들 수 있는 방법을 알고 있으며 만들 수 있다.<br>
A. 하나의 UI 디자인 시스템이 다른 페이지에서도 반복되어서 사용되는 경우. ex) 배너. 모델창. 버튼 
<br>

7. 나는 Promise와 async/await을 왜 사용해야하는지 알고 있으며, 예외처리를 할 수 있다.<br>
A. Promise와 async/await 모두 비동기 처리라는 공통점이 있다. Promise 에는 3가지 상태가 있는데 이는 각각 Pending (대기), Fulfilled (이행), Rejected (실패)이다. async/await은 기존의 Promise 문법의 단점인 꼬리에 꼬리를 무는 코드(then() 지옥)을 해결해준다. await를 통해 Promise 반환 값을 받아 올 수 있다. 하지만 await 는 async 함수 안에서만 동작한다는 제한이 있다. 
<br>

8. 나는 비동기를 명확하게 이해하고 있으며, 처리 순서가 어떻게 진행되는지 알고 있다.<br>
A.비동기는 이벤트루프를 통해 실행된다. 이벤트 루프 내에서 비동기는 다믕과 같은 순서로 진행된다. <br>
1) 호출 스택이 비어있는지 확인 <br>
2) 호출 스택 내부에 수행해야 할 작업이 있는지 확인하고, 수행해야 할 코드가 있으면 자바스크립트 엔진을 이용해 실행
<br>

9. 나는 관심사 분리가 무엇인지 알고 있으며, 어느 순간 관심사를 분리해야하는지 알고 있다.<br>
A. 관심사 분리란 하나의 모듈에서 여러가지의 관심사를 가지고 처리하려면 복잡성이 높기에 관심사를 여러개로 분리해 하나의 관심사에는 하나의 기능만 가지도록 구성하는 것이다. 이렇게 관심사 분리를 한다면 유지보수가 좋은 코드가 될 수 있다. 
<br>

10. 나는 백엔드에서 데이터 패칭을 할 수 있으며 이를 UI에 랜더할 수 있다.<br>
A. GET은 서버의 리소스에서 데이터를 요청할 때, POST는 서버의 리소스를 새로 생성하거나 업데이트 할 때 사용된다.
<br>

11. 나는 주소(URL)에 정보를 담을 수 있으며, 이를 활용하는 훅함수를 알고 있다.<br>
A. 
<br>