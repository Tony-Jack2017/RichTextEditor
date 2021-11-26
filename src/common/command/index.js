import {Transforms, Text, Editor} from 'slate'

// Define our own custom set of helpers.
const CustomCommand = {

  isBoldActive(editor) {
    const marks = Editor.marks(editor)
    return marks ? marks['bold'] === true : false
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'code'
    })
    return !!match
  },

  isItalicMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.italic === true,
      universal: true
    })
    return !!match
  },

  toggleBoldMark(editor) {
    const isActive = CustomCommand.isBoldActive(editor)
    Transforms.setNodes(
      editor,
      {bold: isActive ? null : true},
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
      {type: isActive ? null : 'code'},
      {match: n => Editor.isBlock(editor, n)}
    )
  },
}

export default CustomCommand
