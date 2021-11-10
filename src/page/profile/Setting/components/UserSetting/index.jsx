import styles from './index.module.scss'

import logo from '../../../../../asset/img/logo.png'

const UserSetting = () => {
    return (
        <div>
            <form id={styles['edit-form']}>
                <div>
                    <div className={styles['form-item']}>
                        <div className={styles['form-item-label']}>
                            <label>Username</label>
                        </div>
                        <div className={styles['form-item-input']}>
                            <input type='text' placeholder="Enter you full name"/>
                        </div>
                    </div>
                    <div className={styles['form-item']}>
                        <div className={styles['form-item-label']}>
                            <label>Avatar</label>
                        </div>
                        <div className={styles['form-item-input']}>
                            <div className={styles.avatar}>
                                <img src={logo} alt=""/>
                            </div>
                            <input type="file" style={{display: 'none'}}/>
                        </div>
                    </div>
                    <div className={styles['form-item']}>
                        <div className={styles['form-item-label']}>
                            <label>About you</label>
                        </div>
                        <div className={styles['form-item-input']}>
                            <textarea style={{height: '200px'}} placeholder="I am bitter bricklayer，..." maxlength="200"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles['form-item']}>
                        <div className={styles['form-item-label']}>
                            <label>Email</label>
                        </div>
                        <div className={styles['form-item-input']}>
                            <input type="email" placeholder="815378559@.xx.com"/>
                        </div>
                    </div>
                    <div className={styles['form-item']}>
                        <div className={styles['form-item-label']}>
                            <label>Github</label>
                        </div>
                        <div className={styles['form-item-input']}>
                            <input type="text" placeholder="https://github.com/TonyJack-2017"/>
                        </div>
                    </div>
                    <div className={styles['form-item']}>
                        <div className={styles['form-item-label']}>
                            <label>Gitee</label>
                        </div>
                        <div className={styles['form-item-input']}>
                            <input type="text" placeholder="https://gitee.com/tron_century0"/>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default UserSetting