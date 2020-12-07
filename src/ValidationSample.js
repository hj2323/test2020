import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component{
    state={
        password:'',
        clicked:false,
        validated:false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked:true,
            validated: this.state.password ==='0000'
        });
        this.input.focus();
    }

    render(){
        return(
            <div>
                <input
                ref={(ref)=>this.input=ref}
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure'):''}//버튼을 누르기 전에는 비어있는 문자열을 전달,
                //버튼을 누른 후에는 검증 결과에 따라 success값 또는 failure값을 설정
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;