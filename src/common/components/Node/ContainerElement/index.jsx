const ContainerElement = (props) => {
  return (
    <div style={{margin: '20px auto'}} {...props.attributes}>
      {props.children}
    </div>
  )
}

export default ContainerElement