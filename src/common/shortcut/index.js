
import { Transforms } from 'slate'

export function handleKeyDown(editor) {
  return (e) => {
    if(e.key === 'b' && e.ctrlKey) {
      e.preventDefault()
      Transforms.setNodes(
        editor, { blod: true }
      )
    }
  }
}