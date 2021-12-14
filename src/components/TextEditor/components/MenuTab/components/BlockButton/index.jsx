import {useSlate} from "slate-react";
import { BlockCommand } from "@/common/command";

import Icon from "@/common/components/Icon";

const BlockButton = props => {

  const editor = useSlate()
  const handleMouseDown = () => {
    BlockCommand.toggleBlock(editor, props.format)
  }

  return (
    <button onMouseDown={handleMouseDown}>
      <Icon icon={props.format} active={BlockCommand.isBlockMarkActive(editor, props.format)}/>
    </button>
  )
}

export default BlockButton