import React, { useState } from 'react';

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick =() =>{
        alert(username + ': ' +message);
        setUsername('');
        setMessage('');
    };
    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick();
        }
    };

    
    return(
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"    //안내문자같은것 input태그에 들어가게해주는 속성
                value={username}
                onChange={onChangeUsername}
                />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"    //안내문자같은것 input태그에 들어가게해주는 속성
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
                />
                <button onClick={ onClick}>확인</button>
        </div>
    );
};


export default EventPractice;