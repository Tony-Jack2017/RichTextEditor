import {Transforms, Text, Editor} from 'slate'

// Define our own custom set of helpers.
const CustomCommand = {

  isMarkActive(editor, format){
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
  },

  isBlockMarkActive(editor, type) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === type
    })
    return !!match
  },

  isInlineMarkActive(editor, type) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === type
    })
    return !!match
  },

  toggleMark(editor, format) {
    const isActive = CustomCommand.isMarkActive(editor, format)
    Transforms.setNodes(
      editor,
      {[format]: isActive ? null : true},
      {
        match: n => Text.isText(n),
        split: true
      }
    )
  },

  toggleInline(editor, format) {
    const isActive = CustomCommand.isInlineMarkActive(editor, format)
    Transforms.setNodes(
      editor,
      {[format]: isActive ? null : true},
      {
        match: n => Text.isText(n),
        split: true
      }
    )
  },

  toggleBlock(editor, type) {
    const isActive = CustomCommand.isBlockMarkActive(editor, type)
    Transforms.setNodes(
      editor,
      { type: isActive ? null : type },
      { match: n => Editor.isBlock(editor, n) }
    )
  },
}

export default CustomCommand
