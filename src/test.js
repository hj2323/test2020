import React, {Component} from 'react';

class RefSample extends Component{
    input = React.createRef();//컴포넌트 내부에서 멤버 변수로 React.createRef()담아주기
    //ref를 달고자 하는 요소에 ref props로 넣어주기

    handleFocus = () => {
        this.input.current.focus();//ref를 설정해 준 DOM에 접근
    }

    render(){
        return(
            <div>
                <input ref={this.input} />
            </div>
        );
    }
}

export default RefSample;