
import "./index.module.scss"

const SecondaryTitleElement = props => {
  return (
    <div {...props.attributes}>
      <h2>{props.children}</h2>
    </div>
  )
}

export default SecondaryTitleElement