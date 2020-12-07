import React, { useState } from 'react';

const Say=()=>{
    //배열을 의미, 함수호출하면 배열형태로 반환하겠다는 뜻
    //message 원소의 현재상태
    //setMessage 상태가 변화된 이후(setter함수)
    const[message,setMessage] = useState('');// useState에서 초기값이 공백인상태
    const onClickEnter =()=> setMessage('안녕하세요!'); 
    const onClickLeave =()=> setMessage('안녕히가세요!');
    
    const [color, setColor] = useState('black');

    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color :'red' }} onClick={()=> setColor('red')}>
                빨간색
            </button>
            <button style={{ color :'green' }} onClick={()=> setColor('green')}>
                초록색
            </button>
            <button style={{ color :'blue' }} onClick={()=> setColor('blue')}>
                파란색
            </button>
        </div>
    );
};

export default Say;