import {Slate, Editable, withReact} from 'slate-react'
import {createEditor, Transforms, Editor} from 'slate'
import {useMemo, useState, useCallback} from 'react'

import CodeElement from "./components/CodeElement";

const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
}

const TextEditor = () => {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ])

    const renderElement = useCallback(props => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    return (
        <Slate editor={editor} value={value} onChange={value => setValue(value)}>
            <Editable
                renderElement={renderElement}
                onKeyDown={event => {
                    if (event.key === '`' && event.ctrlKey) {
                        event.preventDefault()
                        const { selection } = editor
                        const [match] = Editor.nodes(editor, {
                            match: n => n.type === 'code',
                        })
                        Transforms.setNodes(
                            editor,
                            { type: match ? 'paragraph' : 'code' },
                            { match: n => Editor.isBlock(editor, n) }
                        )
                    }
                }}
            />
        </Slate>
    )
}

export default TextEditor