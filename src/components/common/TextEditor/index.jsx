import escapeHtml from 'escape-html'
import React, {useImperativeHandle} from "react";
import {Slate, Editable, withReact} from 'slate-react'
import {createEditor, Transforms, Editor, Node, Text} from 'slate'
import {useMemo, useState, useCallback} from 'react'

import CodeElement from "./components/CodeElement";

const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
}

const serialize = node => {
    if (Text.isText(node)) {
        return escapeHtml(node.text)
    }
    const children = node[0].children.map(n => serialize(n)).join('')
    switch (node[0].type) {
        case 'quote':
            return `<blockquote><p>${children}</p></blockquote>`
        case 'paragraph':
            return `<p>${children}</p>`
        case 'link':
            return `<a href="${escapeHtml(node.url)}">${children}</a>`
        default:
            return children
    }
}


const TextEditor = React.forwardRef((props, ref) => {
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
    useImperativeHandle(ref, () => ({
        content: getValue
    }))

    const getValue = () => {
        const content = serialize(value)
        return content
    }

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
})

export default TextEditor