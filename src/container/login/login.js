import React from 'react';
import Logo from '../../compoent/logo/logo';
import {List,InputItem} from 'antd-mobile';
import './login.css';
class Login extends React.Component{
    render(){
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem className="input-item">用户名</InputItem>
                    <InputItem>密码</InputItem>
                </List>
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