import styles from './index.module.scss'
import {useRef, useState} from "react";
import {userSignUp} from "../../api/user";
import {NavLink} from "react-router-dom";


const Sign = (props) => {
    const sign = useRef(null)
    const avatar = useRef(null)

    const [avatar_img, setAvatarImg] = useState("")

    const handleSign = (e) => {
        e.preventDefault()
        const data = {
            username: sign.current.username.value,
            avatar: sign.current.avatar.value,
            introduce: sign.current.introduce.value,
            cover: sign.current.cover.value,
            location: sign.current.location.value,
            email: sign.current.email.value,
            github: sign.current.github.value
        }
        userSignUp(data)
    }

    const handleChange = () => {
        if(avatar.current.files.length !== 0) {
            setAvatarImg(window.URL.createObjectURL(avatar.current.files[0]))
        }
    }
    const handleSelectAvatar = () => {
        avatar.current.dispatchEvent(new MouseEvent('click'))
    }

    return (
        <div className={styles.sign}>
            <div className={styles.content}>
                <div className={styles['content-header']}>
                    <h2>Welcome to website</h2>
                </div>
                <form ref={sign} id={styles.form}>
                    <div className={styles.left}>
                        <div className={styles['form-item']}>
                            <label>Account</label>
                            <input className='input' name='account'/>
                        </div>
                        <div className={styles['form-item']}>
                            <label>Password</label>
                            <input className='input' name='password'/>
                        </div>
                        <div className={styles['form-item']}>
                            <label>Email</label>
                            <input className='input' name='email'/>
                        </div>
                        <div className={styles['form-item']}>
                            <label>Security Code</label>
                            <input className='input' name='security_code'/>
                        </div>
                    </div>
                    <div className={styles.middle}>
                    </div>
                    <div className={styles.right}>
                        <div className={styles['form-item']}>
                            <label>UserName</label>
                            <input className='input' name='username' placeholder="username"/>
                        </div>
                        <div className={styles['form-item']}>
                            <label>Avatar</label>
                            {
                                avatar_img === '' ? <div className={styles.avatar} onClick={handleSelectAvatar}>
                                </div> : <img className={styles.avatar} src={avatar_img}/>
                            }
                            <input type='file' name='avatar' ref={avatar} style={{display: 'none'}} onChange={handleChange}/>
                        </div>
                        <div className={styles['form-item']}>
                            <label>Introduce</label>
                            <textarea className='input' style={{height: "150px"}} name='introduce'
                                      placeholder="About of you"/>
                        </div>
                    </div>
                </form>
                <div className={styles['content-footer']}>
                    <button className="button" style={{width: '40%'}} onClick={handleSign}>Sign in</button>
                    <h3 className={styles['login']}>
                        If you had the account, you can
                        <NavLink to='/login' className={styles['link']} style={{marginLeft: '8px'}}>
                            login up
                        </NavLink>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Sign
