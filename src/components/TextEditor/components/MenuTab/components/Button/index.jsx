import {useSlate} from "slate-react";

import CustomCommand from "../../../../../../common/command";
import Icon from "../../../../../../common/components/Icon";

const Button = (props) => {

  const editor = useSlate()

  console.log(editor)

  const handleMouseDown = (e) => {
    e.preventDefault()
    switch(props.format) {
      case 'bold':
        CustomCommand.toggleBoldMark(editor)
        break
      case 'code':
        CustomCommand.toggleCodeBlock(editor)
        break
    }
  }

  return (
    <button onMouseDown={handleMouseDown}>
      <Icon icon={props.format} active={CustomCommand.isBoldActive(editor)}/>
    </button>
  )
}
export default Button