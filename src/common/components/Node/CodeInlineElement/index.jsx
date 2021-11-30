
import "./index.module.scss"

const CodeInlineElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

export default CodeInlineElement