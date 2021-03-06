
import "./index.module.scss"

const LinkElement = props => {
  return (
    <a href={props.url}>
      {props.children}
    </a>
  )
}

export default LinkElement