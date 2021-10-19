import styles from './index.module.scss'

import personalPoster from '../../../../asset/mock/personal-poster.jpeg'
import personalAvatar from '../../../../asset/mock/personal-avator.png'

const Header1 = () => {
    return (
        <div className={styles['personal-header']}>
            <div className={styles['header-poster']}>
                <img src={personalPoster}/>
            </div>
            <div  className={styles['personal-content']}>
                <div  className={styles['header-content']}>
                    <div className={styles['personal-avatar']}>
                        <div>
                            <img src={personalAvatar}/>
                        </div>
                    </div>
                    <div className={styles['personal-info']}>
                        <h1>Gan WR</h1>
                        <h2>Edit Profile</h2>
                        <p>
                            Hello World, JS Full-stack Developer
                        </p>
                    </div>
                </div>
                <div className={styles['content-footer']}>
                    <ul>
                        <li>Follow</li>
                        <li>Follow</li>
                        <li>Follow</li>
                        <li>Follow</li>
                        <li>Follow</li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Header1