import React from 'react';
import Logo from '../../compoent/logo/logo';
import {List,InputItem} from 'antd-mobile';
import './login.css';
class Login extends React.Component{
    render(){
        return (
            <div>
                <Logo></Logo>
                <form>
                    <input className="input-item" placeholder="用户名"></input>
                    <input className="input-item" placeholder="密码"></input>
                </form>
                <a className="btn" href="#">
                    <div className="inner-btn">
                        <span>登录</span>
                    </div>
                </a>
                <a className="btn" href="#">
                    <div className="inner-btn">
                        <span>注册</span>
                    </div>
                </a>
            </div>
        )
    }
}
export default Login;