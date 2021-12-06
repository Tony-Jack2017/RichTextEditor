import {useSlate} from "slate-react";
import {InlineCommand} from "../../../../../../common/command";

import Icon from "../../../../../../common/components/Icon";
const InlineButton = props => {

  const editor = useSlate()
  const handleMouseDown = () => {
    InlineCommand.toggleInline(editor, props.format)
  }

  return (
    <button>
      <button onMouseDown={handleMouseDown}>
        <Icon icon={props.format} active={InlineCommand.isInlineMarkActive(editor, props.format)}/>
      </button>
    </button>
  )
}

export default InlineButton