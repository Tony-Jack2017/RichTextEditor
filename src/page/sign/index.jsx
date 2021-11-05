import styles from './index.module.scss'
import {useRef} from "react";


const Sign = (props) => {
    const sign = useRef(null)
    const handleLogin = (e) => {
        e.preventDefault()
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
                            <input className='input' name='account' placeholder="email / phone / username"/>
                        </div>
                        <div className={styles['form-item']}>
                            <label>Account</label>
                            <input className='input' name='account' placeholder="email / phone / username"/>
                        </div>
                        <div className={styles['form-item']}>
                            <label>Account</label>
                            <input className='input' name='account' placeholder="email / phone / username"/>
                        </div>
                    </div>
                    <div className={styles.middle}>
                    </div>
                    <div className={styles.right}>
                        <div className={styles['form-item']}>
                            <label>Account</label>
                            <input className='input' name='account' placeholder="email / phone / username"/>
                        </div>
                        <div className={styles['form-item']}>
                            <label>Account</label>
                            <input className='input' name='account' placeholder="email / phone / username"/>
                        </div>
                        <div className={styles['form-item']}>
                            <label>Account</label>
                            <input className='input' name='account' placeholder="email / phone / username"/>
                        </div>
                    </div>
                </form>
                <div className={styles['content-footer']}>
                    <button className="button" style={{width: '40%'}} onClick={handleLogin}>Sign in</button>
                </div>
            </div>

        </div>
    )
}

export default Sign
