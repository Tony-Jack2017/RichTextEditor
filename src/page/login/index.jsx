import styles from './index.module.scss'
import {NavLink} from "react-router-dom";
import {useRef} from "react";

import {userLogin} from '../../api/user'
import { connect } from "react-redux";
import createTokenAction from "../../redux/actions/token_action";

const Login = (props) => {
    const login = useRef(null)
    const handleLogin = (e) => {
        e.preventDefault()
        const data = {
            account: login.current.account.value,
            password: login.current.password.value
        }
        userLogin(data).then(resp => {
            if (resp.code === 'UE001') {
                alert(resp.error)
            } else {
                props.addToken(resp.data.token)
                props.history.replace("/home")
            }
        })
    }

    return (
        <div className={styles.login}>
            <form ref={login} id={styles.form}>
                <div className={styles['form-header']}>
                    <h2>Welcome to website</h2>
                </div>
                <div className={styles['form-item']}>
                    <label>Account</label>
                    <input className='input' name='account' placeholder="email / phone / username"/>
                </div>
                <div className={styles['form-item']}>
                    <label>Password</label>
                    <input type="password" name='password' className='input'/>
                    <p className={styles['forget']}>
                        Forget password ?
                        <NavLink to="/login" className={styles.link}>
                            >>>>>>
                        </NavLink>
                    </p>
                </div>
                <div className={styles['form-item']}>
                    <button className="button" style={{width: '100%'}} onClick={handleLogin}>Login in</button>
                </div>
                <div className={styles['form-item']}>
                    <h3 className={styles['sign']}>
                        If you haven't the account, you can
                        <NavLink to='/sign' className={styles['link']} style={{marginLeft: '8px'}}>
                            sign up
                        </NavLink>
                    </h3>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToken: token => dispatch(createTokenAction('ADDTOKEN', token))
    }
}

export default connect(state => state, mapDispatchToProps)(Login)
