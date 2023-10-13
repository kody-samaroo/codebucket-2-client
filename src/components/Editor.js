import React, { useState } from "react";
import {Controlled as CodeMirrorEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLeftAndUpRightToCenter, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'

// Require CodeMirror languages
require('codemirror/mode/xml/xml');
require('codemirror/mode/css/css');
require('codemirror/mode/javascript/javascript');


function Editor({ mode, displayName, value, onChange }) {
    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
        <div className="editor-title">
            {displayName}
            <button
                type="button"
                className="expand-collapse-btn"
                onClick={() => setOpen(prevOpen => ~prevOpen)}
            >
            <FontAwesomeIcon icon={open ? faDownLeftAndUpRightToCenter : faUpRightAndDownLeftFromCenter} />
            </button>
        </div>
        <div className="pane">
            <CodeMirrorEditor
                className="code-mirror-editor"
                onBeforeChange={handleChange}
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    lineNumbers: true,
                    mode: {mode},
                    theme: 'material',
                }}
            />
        </div>
    </div>
  )
}

export default Editor