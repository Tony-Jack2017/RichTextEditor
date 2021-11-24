import {useSlate} from "slate-react";

import CustomCommand from "../../../../../../common/command";

const Button = (props) => {

    const editor = useSlate()

    const handleMouseDown = (e) => {
        e.preventDefault()
        switch (props.format) {
            case 'blod':
                CustomCommand.toggleBoldMark(editor)
                break
            case 'code':
                CustomCommand.toggleCodeBlock(editor)
                break
        }
    }

    return (
        <button onMouseDown={handleMouseDown}>
            {props.children}
        </button>
    )
}
export default Button