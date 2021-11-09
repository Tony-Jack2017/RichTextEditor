import React, { useEffect, useMemo, useState, useCallback } from "react";
import { createEditor, Transforms, Editor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

import styles from './index.module.scss'


import CodeElement from "./components/CodeElement";
import DefaultElement from "./components/DefaultElement";

const TextEditor = () => {

  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])

  const editor = useMemo(() => withReact(createEditor()), [])


  const handleKeyDown = (event) => {
    if (event.key === '`' && event.ctrlKey) {
      // 阻止插入 "`" 的默认行为。
      event.preventDefault()
      // 否则，把当前选择的 blocks 的类型设为 "code"
      Transforms.setNodes(
        editor,
        { type: 'code' },
        { match: n => Editor.isBlock(editor, n) }
      )
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


  return (
    <div className={styles.editor}>
      <div className={styles['editor-tool-tab']}></div>
      <div className={styles['editor-body']}>
        <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)} >
          <Editable renderElement={renderElement} onKeyDown={handleKeyDown}/>
        </Slate>
      </div>
    </div>
  )
}


export default TextEditor