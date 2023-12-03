import React from "react";

function Display({ srcDoc }) {

    return (
        <iframe 
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
            style={{border: "none"}}
    />
    )
}

export default Display