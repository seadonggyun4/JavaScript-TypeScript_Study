/*
  [ 데이터 불변성(Immutability) ]

  - 원시 데이터(불변성 o): String, Number, Boolean, undefined, null 

  - 참조형 데이터(불변성 X): Object, Array, Function


  선언 연산자
  - var: 재할당o 재선언o 
  - let: 재할당o 재선언x 
  - const: 재할당x 재선언x 
*/



//원시 데이터 ===================================================================================================================================================
// 1값을 메모리 특정 주소에 저장한다음 그 주소값을 a에 할당
// 4값을 메모리 특정 주소에 저장한다음 그 주소값을 b에 할당
let a = 1
let b = 4
// "a === b" 는 a와b의 메모리 주소를 비교함을 의미
console.log(a, b, a===b)
// a의 주소를 b에 할당
b = a
// a와 b의 주소값이 동일해 졌고 당연히 주소가 같기때문에 그 주소에 할당되어 있는 값도 동일하다.
console.log(a,b, a===b)
// 7값을 특정 주소에 저장한다음 그 주소값을 a에 할당, 즉 a는 1을 저장하고 있던 주소값 에서 7을 저장하고 있는주소값으로 바뀌었다.
a = 7


/*
  [ 메모리의 불변성 ]
    아래 예시에서
    c = 1 을 선언할때 기존에 이미 a = 1을 통해 메모리에 1이라는 값이 할당되고 그 주소를 a가 참조 하는 형식을 가지고 있었다.
    때문에 c = 1 을 선언할때 1의 값을 넣은 새로운 메모리 주소가 생성되는것이아니라 기존에 a = 1 로 인해 생성된 메모리 주소를 참조하는 형식으로 c = 1 이 성립하게 된다.
    이처럼 원시데이터는 기존에 메모리에 할당하고자 하는 값이 들어있다면 그 주소를 참조하는 형식으로  돌아간다. 
*/
let c = 1
console.log(b,c, b === c)

//참조형 데이터 ===================================================================================================================================================


//객체 A,B 의 내부 속성 값은 동일하다.
let Aobject = {k:1}
let Bobject = {k:1}
/*
  [참조형 데이터]
  "참조형 데이터" 인 객체는 선언 할때 마다 새로운 메모리 주소를 사용하기 때문에
  아무리 같은 값이 내부에 들어 있다 하더라도 서로 다르다.
  
  이는 "원시데이터" 는 값이 같을때 데이터의 주소가 변하지 않는 개념인 "데이터 불변성" 과 상반된다.
*/

console.log(Aobject, Bobject, Aobject === Bobject) //false

// A.k객체 의 값을 7로 변경
Aobject.k = 7
// A객체 의 메모리 주소값을 B객체에 할당
Bobject = Aobject
console.log(Aobject, Bobject, Aobject === Bobject) //true

/*
 [ 참조형 데이터의 주의해야 할 점 ]
 - 위 예시에서 A객체와 B객체의 메모리 주소를 동일하게 바꿨다.
 - 아래 예시에서 A객체의 k 값만 바꿨는데도 불구하고 B객체의 값까지 바뀌었다
 - 이는 A객체와 B객체가 서로 같은 메모리 주소를 참조 하고 있기때문 



 - 이처럼 "참조형 데이터는" 같은 메모리 주소를 참조하고 있을때 하나만 수정되도 다같이 수정되는 치명적인 단점이 있다.
 - 이와 같은 현상을 방지 하기 위해서는 " 복사 " 사는 개념을 사용해 객체를 관리해야한다.
 - 복사는 "얕은복사" 와 "깊은복사" 두 종류로 나뉜다.
*/
Aobject.k = 2
console.log(Aobject, Bobject, Aobject === Bobject)