import React, { MouseEventHandler, useCallback, useMemo, useState } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';
import SimpleMDE from 'easymde';
import "easymde/dist/easymde.min.css";
import EasyMDE from 'easymde';
import { marked } from 'marked';

interface AppProperties {
}

interface AppState {
}

class App extends React.Component<AppProperties, AppState>{

  constructor(props: AppProperties) {
    super(props)
  }

  public render() {
      return <MarkdownEditor></MarkdownEditor>
    }
}

export default App;


const MarkdownEditor = () => {
  const [value, setValue] = useState("Initial");


  const onChange = (value: string) => {
    setValue(value);
  };

  return <div><SimpleMdeReact value={value} onChange={onChange} /></div>

};