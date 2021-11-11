
import escapeHtml from 'escape-html'
import styles from './index.module.scss'

import { useMemo, useState } from "react"
import { Slate, withReact, Editable } from "slate-react"
import { createEditor } from "slate"

const StoreEditorContent = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState( localStorage.getItem('content') ? JSON.parse(localStorage.getItem('content')) : [] )

  return (
    <div className={styles.editor}>
      <div className={styles['editor-tool-tab']}></div>
      <div className={styles['editor-body']}>
        <Slate editor={editor} value={value} onChange={
          (value) => {
            setValue(value)
            const content = JSON.stringify(value)
            localStorage.setItem('content', content)
          }
        }>
          <Editable />
        </Slate>
      </div>
      <div className={styles['editor-footer']}>
        <button>Confirm</button>
      </div>
    </div>
  )
}

export default StoreEditorContent