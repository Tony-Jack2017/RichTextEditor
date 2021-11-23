import { Transforms, Text, Editor } from 'slate'

// Define our own custom set of helpers.
const CustomCommand = {
    isBoldMarkActive(editor) {
        const [ match ] = Editor.nodes(editor, {
            match: n => n.bold === true,
            universal: true
        })
        return !!match
    },
    
    isCodeBlockActive(editor) {
        console.log('判断')
        const [ match ] = Editor.nodes(editor, {
            match: n => n.type === 'code'
        })
        return !!match
    },
    
    toggleBoldMark(editor) {
        const isActive = CustomCommand.isBoldMarkActive(editor)
        Transforms.setNodes(
            editor,
            { bold: isActive ? null : true },
            {
                match: n => Text.isText(n),
                split: true
            }
        )
    },
    toggleCodeBlock(editor) {
        const isActive = CustomCommand.isCodeBlockActive(editor)
        Transforms.setNodes(
            editor,
            { type: isActive ? null : 'code' },
            { match: n => Editor.isBlock(editor, n) }
        )
    },
}

export default CustomCommand
