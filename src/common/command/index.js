import {Transforms, Text, Editor} from 'slate'

/**
 * 元素样式转换指令
 */
const MarkCommand = {
  isMarkActive(editor, format){
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
  },

  toggleMark(editor, format) {
    const isActive = MarkCommand.isMarkActive(editor, format)
    Transforms.setNodes(
      editor,
      {[format]: isActive ? null : true},
      {
        match: n => Text.isText(n),
        split: true
      }
    )
  },
}

/**
 * 元素行内转变指令
 */
const InlineCommand = {

  isInlineMarkActive(editor, type) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === type
    })
    return !!match
  },

  toggleInline(editor, format) {
    const isActive = InlineCommand.isInlineMarkActive(editor, format)
    Transforms.setNodes(
      editor,
      {[format]: isActive ? null : true},
      {
        match: n => Text.isText(n),
        split: true
      }
    )
  },

}

/**
 * 元素块级转变指令
 */
const BlockCommand = {
  isBlockMarkActive(editor, type) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === type
    })
    return !!match
  },

  toggleBlock(editor, type) {
    const isActive = BlockCommand.isBlockMarkActive(editor, type)
    Transforms.setNodes(
      editor,
      { type: isActive ? null : type },
      { match: n => Editor.isBlock(editor, n) }
    )
  },

}

export {
  MarkCommand,
  InlineCommand,
  BlockCommand
}
