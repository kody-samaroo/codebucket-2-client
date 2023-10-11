import React from "react"
import {Controlled as CodeMirror} from 'react-codemirror2'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css');


function Editor({ mode, language, value, onChange }) {

  return (
    <div className="editor-container">
        <div className="editor-title">
            {language}
        </div>
        {/* <AceEditor
            className="text-editor"
            mode={mode}
            onChange={onChange}
            value={value}
            theme="github"
            height="200px"
            setOptions={{
                wrap: true,
                fontSize: "14px"
            }}
        /> */}
        <CodeMirror
            value={value}
            options={{
                mode: {mode},
                theme: 'material',
                lineNumbers: true
              }}
            onBeforeChange={(editor, data, value) => {
                onChange(value)
            }}
            onChange={(editor, data, value) => {
                console.log(value)
            }}
        />
    </div>
  )
}

export default Editor