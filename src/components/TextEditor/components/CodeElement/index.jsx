import styles from './index.module.scss'

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code className={styles.code}>{props.children}</code>
    </pre>
  )
}

export default CodeElement