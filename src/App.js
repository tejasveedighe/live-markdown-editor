import { useState } from 'react';
import './App.css';
import { Remarkable } from 'remarkable';

function Markdown (props) {
  let md = new Remarkable();
  let text = {__html : md.render(props.markdown)}
  return (
    <div className='markdown-area' dangerouslySetInnerHTML={text}>
    </div>
  );
}

function App() {
  const [markdown, setMarkdown] = useState("Hello! **World**")
  const handleChange = (event) => {
    setMarkdown(event.target.value);
  }

  return (
    <div className="App">
      <h1>Input</h1>
      Enter Some markdown
      <br />
      <textarea onChange={handleChange} value={markdown}></textarea>
      <br/><br/>
      <h1>Output</h1><br/>
      <Markdown markdown={markdown}/>
    </div>
  );
}

export default App;
