import React from "react";

const CodeElement = React.forwardRef((props,ref) => {
    return (
        <pre {...props.attributes} >
            <code>{props.children}</code>
        </pre>
    )
})

export default CodeElement