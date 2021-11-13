
import { useState, useMemo, useCallback } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

import styles from './index.module.scss'
import { handleKeyDown } from '../../common/shortcut/index'


import Leaf from './components/Leaf'

const Editor = () => {


  const editor = useMemo(() => withReact(createEditor()), [])

  const [value, setValue] = useState([
    {
      type: 'paragaph',
      children: [{text: '请尽情释放你的脑洞！'}]
    }
  ])

  const handleChange = (newValue) => {
    console.log(newValue);
    setValue(newValue)
  }


  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])


  return (
    <div className={styles.editor}>
      <Slate editor={editor} value={value} onChange={handleChange}>
        <Editable renderLeaf={renderLeaf} onKeyDown={handleKeyDown(editor)} />
      </Slate>
    </div>
  )
}

export default Editor