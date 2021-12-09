const UnOrderedListElement = props => {
  return (
    <ul {...props.attributes}>
      {props.children}
    </ul>
  )
}

export default UnOrderedListElement