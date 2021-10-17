import {useRef} from 'react'
import './index.scss'
import CoverImg from '../../asset/page/login/cover.jpg'

import '../../mock/user/login'
import axios from 'axios'
import { connect } from "react-redux";
import createTokenAction from "../../redux/actions/token_action";
import { ADDTOKEN } from "../../redux/constant";

const Login = (props) => {

    const login = useRef(null)

    const handleSubmite = (event) => {

        if (event.preventDefault) {
            event.preventDefault();
        } else {
            window.event.returnValue = false;
        }

        axios.post('/user/login', {
            username: login.current.username.value,
            password: login.current.password.value
        }).then(resp => {
            props.add_token(resp.data.token)
            props.history.push('/home')
        })
    }

    return (
        <div id='login'>
            <div className='show'>
                <img src={CoverImg} alt="登录界面封面"/>
            </div>
            <div id='login-form'>
                <div className='content'>
                    <div className='title'>
                        <h2>Welcome Use Blog</h2>
                        <span>使用账号登录该网站</span>
                    </div>
                    <div className='form'>
                        <form ref={login} onSubmit={handleSubmite}>
                            <div className='field'>
                                {/* <label></label> */}
                                <input name="username" type='text' placeholder='用户名/邮箱'/>
                            </div>
                            <div className='field'>
                                {/* <label></label> */}
                                <input name="password" type='password' placeholder="登录密码"/>
                            </div>
                            <div className='submit field'>
                                <input type='submit' value='Login Up'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => null
const mapDispatchToProps = (dispatch) => {
    return {
        add_token: token => dispatch(createTokenAction(ADDTOKEN,token))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)