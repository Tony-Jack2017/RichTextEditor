import styles from './index.module.scss'

const AccountSetting = () => {
    return (
        <div>
            <form id={styles['account-form']}>
                <div className={styles['form-item']}>
                    <div className={styles['form-item-label']}>
                        <label>New Password</label>
                    </div>
                    <div className={styles['form-item-input']}>
                        <input type='password' placeholder="please input you new password"/>
                    </div>
                </div>
                <div className={styles['form-item']}>
                    <div className={styles['form-item-label']}>
                        <label>Confirm New Password</label>
                    </div>
                    <div className={styles['form-item-input']}>
                        <input type='password' placeholder="please input you new password"/>
                    </div>
                </div>
                <div className={styles['form-item']}>
                    <button>Confirm Update</button>
                </div>
            </form>
        </div>
    )
}

export default AccountSetting