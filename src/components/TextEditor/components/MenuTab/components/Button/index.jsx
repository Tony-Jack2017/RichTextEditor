import {useSlate} from "slate-react";

import CustomCommand from "../../../../../../common/command";
import Icon from "../../../../../../common/components/Icon";

const Button = (props) => {

  const editor = useSlate()

  const handleMouseDown = (e) => {
    e.preventDefault()
    switch(props.format) {
      case 'bold':
        CustomCommand.toggleMark(editor, 'bold')
        break
      case 'italic':
        CustomCommand.toggleMark(editor, 'italic')
        break
      case 'underline':
        CustomCommand.toggleMark(editor, 'underline')
        break
      case 'code':
        CustomCommand.toggleBlock(editor, 'code')
        break
    }
  }

  const judgeFormat = (format) => {
    switch(format) {
      case 'bold':
        return CustomCommand.isMarkActive(editor, 'bold')
      case 'italic':
        return CustomCommand.isMarkActive(editor, 'italic')
      case 'underline':
        return CustomCommand.isMarkActive(editor, 'underline')
      case 'code':
        return CustomCommand.isBlockMarkActive(editor, 'code')
    }
  }

  return (
    <button onMouseDown={handleMouseDown}>
      <Icon icon={props.format} active={judgeFormat(props.format)}/>
    </button>
  )
}
export default Button