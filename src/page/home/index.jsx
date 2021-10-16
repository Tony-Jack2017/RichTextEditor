import styles from './index.module.scss'

const Home = () => {
    return (
        <div id={styles.home}>
            <div className={styles.left}>
                This is left block
            </div>
            <div className={styles.middle}>
                This is middle block
            </div>
            <div className={styles.right}>
                This is right block
            </div>
        </div>
    )
}

export default Home