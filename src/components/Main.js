import React, { useState, useEffect } from 'react'
import Editor from './Editor'
import Display from './Display'


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

    const handleSaveUpdate = () => {
        console.log("saved")
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
        <button className="save-button" onClick={() => handleSaveUpdate(html, css, js)}>
            Save
        </button>

        <button className="clear-button" onClick={handleClear}>
            Clear
        </button>

        <div className="editor-panel">
            <Editor
                mode="xml"
                language="HTML"
                value={html}
                onChange={setHtml}
            />
            <Editor
                mode="css"
                language="CSS"
                value={css}
                onChange={setCss}
            />
            <Editor
                mode="javascript"
                language="JAVASCRIPT"
                value={js}
                onChange={setJs}
            />
        </div>

        <div className="display-container">
            <Display srcDoc={srcDoc}/>
        </div>
    </div>
  )
}

