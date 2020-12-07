import React, { Component } from 'react';

class Counter extends Component{
    state = {    //constructor가 없더라도 state는 이렇게 초기 값을 설정할 수 있다. 
        number:0,
        fixedNumber:0
    }

    render(){//값을 반환할때는 반드시 render라는 함수를 써서 값을 반환 
        const{number, fixedNumber}=this.state; //현재 상태에서 state를 참조하고 싶을때??
        //number 라는 props를  this.state 로 선언
        return(//return문이 여러개 이상이면 div로 묶어주기
            <div>
                <h1>{number}</h1>
                <h2> 바뀌지 않는 값: {fixedNumber}</h2>
                <button
                onClick={()=>{//onclick이벤트:버튼을 눌렀을때 어떤 동작을 하는지 정의해주는 이벤트
                        this.setstate({number:number+1});//버튼을 클릭하면 number라는 값이 1씩 바뀌게 하겠다
                }}//***setState라는 함수는 인자로 전달되는 값만 변화시켜준다
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;