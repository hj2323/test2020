import React, { useState } from 'react';

const IterationSample = () =>{
    //동적인데이터 -->state 하지만 state 는 class형 컴포넌트에 사용가능
    //컴포넌트가 function형이기 때문에 useState 쓴다
    const [names, setNames] = useState([//데이터 배열
        { id: 1,text: '눈사람' },
        { id: 2,text: '얼음' },
        { id: 3,text: '눈' },
        { id: 4,text: '바람' }
    ]);
    //input
    const [inputText, setInputText] = useState('');
    //고유id
    const[nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id
    
    //메소드 호출이되면 현재텍스트상자에 입력한 내용을 리턴
    const onChange = e =>setInputText(e.target.value);//값을 넣어주는 코드
    const onClick = () => {
        const nextNames = names.concat({//배열의 내장 함수 concat을 사용하여 새로운 항목을 추가한 배열만들기
            id: nextId, //nextId 값을 id로 설정하고
            text: inputText
        });
        setNextId(nextId+1); //nextId값에 1을 더해 준다.
        setNames(nextNames);//names 값을 업데이트한다.
        setInputText('');// inputText를 비운다
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const namesList=names.map(name=> (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
        </li>
    ));
    //return <ul>{nameList}</ul>;
    return(
        <>
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>추가</button>
        <ul>{namesList}</ul>
        </>
    );
};

export default IterationSample;