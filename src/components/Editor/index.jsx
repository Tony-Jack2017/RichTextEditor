
import { useState, useCallback } from 'react'
import { Slate, Editable} from 'slate-react'

import styles from './index.module.scss'


import Leaf from './components/Leaf'
import CodeElement from '../../common/components/Node/CodeElement'
import DefaultElement from '../../common/components/Node/DefaultElement'

const Editor = (props) => {


  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [ { text: '这是我的文本'} ]
  }
  ])

  const handleChange = (value) => {
    setValue(value)
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
      <Slate editor={props.editor} value={value} onChange={handleChange}>
        <Editable renderElement={renderElement} renderLeaf={renderLeaf}/>
      </Slate>
    </div>
  )
}

export default Editor