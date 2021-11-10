
import { useEffect } from "react";

const Leaf = props => {
  useEffect(() => {
    console.log(props.leaf.bold);
  }, [props.leaf.bold])
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  )
}

export default Leaf