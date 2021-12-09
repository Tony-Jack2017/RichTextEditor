const ListItemElement = props => {
  return (
    <li {...props}>
      {props.children}
    </li>
  )
}

export default ListItemElement