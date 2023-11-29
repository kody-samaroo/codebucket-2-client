import React, { useState, useEffect } from 'react'
import Editor from './Editor'


export default function Main({ selected, setSelected }) {
    const [html, setHtml] = useLocalStorage("html", "")
    const [css, setCss] = useLocalStorage("css", "")
    const [js, setJs] = useLocalStorage("js", "")

    // CHECKS IF SOURCE DOC NEEDS TO BE UPDATED
    // CLEARS THE SELECTED PROJECT DATA
    useEffect(() => {
        if (selected === "") {
        } else {
            setHtml(selected.html)
            setCss(selected.css)
            setJs(selected.javascript)
        }
    }, [setHtml, setCss, setJs, selected])

    const srcDoc = (`
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script defer>${js}</script>
    </html>
    `)

    // CLEARS ACE-EDITORS
    const handleClear = () => {
        setHtml("");
        setCss("");
        setJs("");
        setSelected("");
    }

    const handleSave = () => {
        fetch('http://localhost:8800/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    project_id: 3, 
                    title: 'from react',
                    author: 1, 
                    html: html, 
                    css: css, 
                    js: js
                }),
            })
            .then(r => r.json())
            .then(data => {
                console.log('Success:', data)
            })
    }

        // LOCAL STORAGE HOOK
        function useLocalStorage(key, initialValue) {
            const [value, setValue] = useState(() => {
                const item = localStorage.getItem(key)
                return item ? JSON.parse(item) : initialValue
                // eslint-disable-next-line
                setValue(item)
            })
            localStorage.setItem(key, JSON.stringify(value))
            return [value, setValue]
        }

  return (
    <div className="main-container">
        <button className="save-button" onClick={handleSave}>
            Save
        </button>

        <button className="clear-button" onClick={handleClear}>
            Clear
        </button>

        <div className="pane top-pane">
            <Editor
                mode="xml"
                displayName="HTML"
                value={html}
                onChange={setHtml}
            />
            <Editor
                mode="css"
                displayName="CSS"
                value={css}
                onChange={setCss}
            />
            <Editor
                mode="javascript"
                displayName="JS"
                value={js}
                onChange={setJs}
            />
        </div>

        <div className="pane">
            <iframe 
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
                style={{border: "none"}}
            />
        </div>
    </div>
  )
}

