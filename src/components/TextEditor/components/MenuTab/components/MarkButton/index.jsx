import {useSlate} from "slate-react";
import {MarkCommand} from "../../../../../../common/command";

import Icon from "../../../../../../common/components/Icon";
const MarkButton = props => {

  const editor = useSlate()
  const handleMouseDown = () => {
    MarkCommand.toggleMark(editor, props.format)
  }

  return (
    <button disabled>
      <button onMouseDown={handleMouseDown}>
        <Icon icon={props.format} active={MarkCommand.isMarkActive(editor, props.format)}/>
      </button>
    </button>
  )
}

export default MarkButton