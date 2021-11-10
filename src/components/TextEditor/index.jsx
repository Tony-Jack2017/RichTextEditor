import React, { useMemo, useState, useCallback } from "react";
import { createEditor, Transforms, Editor, Text } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

import styles from './index.module.scss'


import CodeElement from "./components/CodeElement";
import DefaultElement from "./components/DefaultElement";
import Leaf from "./components/Leaf";

const TextEditor = () => {

  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])

  const editor = useMemo(() => withReact(createEditor()), [])


  const handleKeyDown = (event) => {

    if (!event.ctrlKey) {
      return
    }

    // eslint-disable-next-line default-case
    switch (event.key) {
      case '`': {
        // 阻止插入 "`" 的默认行为。
        event.preventDefault()
        // 否则，把当前选择的 blocks 的类型设为 "code"

        const [match] = Editor.nodes(editor, {
          match: n => n.type === 'code',
        })

        Transforms.setNodes(
          editor,
          { type: match ? 'paragraph' : 'code' },
          { match: n => Editor.isBlock(editor, n) }
        )
        break
      }
      case 'b': {
        event.preventDefault()
        Transforms.setNodes(
          editor,
          { bold: true },
          // 应用到文本节点上，
          // 如果所选内容仅仅是全部文本的一部分，则拆分它们。
          { match: n => Text.isText(n), split: true }
        )
        break
      }

    }
  }

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  return (
    <div className={styles.editor}>
      <div className={styles['editor-tool-tab']}></div>
      <div className={styles['editor-body']}>
        <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)} >
          <Editable renderLeaf={renderLeaf} renderElement={renderElement} onKeyDown={handleKeyDown} />
        </Slate>
      </div>
    </div>
  )
}


export default TextEditor