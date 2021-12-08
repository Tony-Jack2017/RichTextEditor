import "./index.module.scss"

const PrimaryTitleElement = props => {
  return (
    <div {...props.attributes}>
      <h1>{props.children}</h1>
    </div>
  )
}

export default PrimaryTitleElement