
import styles from './index.module.scss'

const DefaultElement = (props) => {
  return(
    <p className={styles.default} {...props.attributes}>{props.children}</p>
  )
}

export default DefaultElement