import React, {Component} from 'react';

class ScrollBox extends Component{
    
    scrollToBottom = () =>{
        const { scrollHeight, clientHeight } = this.box;
        /* 앞 코드에는 비구조화 할당 문법을 사용했습니다.
            다음 코드와 같은 의미 입니다.
            const scrollHeight = this.box.scrollHeight;
            const clientHeight = this.box.clientHeight;
        */
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    
    render(){
        const style={
            border:'1px solid black',
            height:'300px',
            width:'300px',
            overflow:'auto',    // overflow프로퍼티는 요소내의 컨텐츠가 너무 커서 요소내에 모두 보여주기 힘들때 그것을 어떻게 보여줄지를 지정
            position:'relative'
        };

        const innerStyle={
            width:'100%',
            height:'650px',
            background:'linear-gradient(white,black)'
        }

        return(
            <div
            style={style}
            ref={(ref)=>{this.box=ref}}>    
                <div style={innerStyle}/>
            </div>
        );
    }

}

export default ScrollBox;