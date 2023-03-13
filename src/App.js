import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import {useState} from 'react'
import { marked } from 'marked';



// "``` # this is a heading \n <br><br/> \n ## And this is a subheading \n <br><br> and this is a [link](https://www.freecodecamp.org) \n ## sub \n ### sub3```"

const initianState = {
  editorExpanded : false,
  previewerExpanded : false,
  editorInput : `
  # H1
  ## H2
  [link](https://www.example.com)


  inline code 	\`code\`


  \`\`\`
  {
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
  }
  \`\`\`


  - First item
  - Second item
  - Third item


  > blockquote

  **bold text**

  ![alt text](image.jpg)
  `
}

function App() {
  
  const [state,setState] = useState(initianState) 

  function handlePreviewerExpand() {
    setState({...state, previewerExpanded:!state.previewerExpanded});
  }

  function handleEditorExpand(){
    setState({...state, editorExpanded:!state.editorExpanded});
  }

  function handleEditorInput(e) {
    setState({...state, editorInput:e.target.value});
  }

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App container-fluid">
      <Editor
        expand={state.editorExpanded}
        actualizarExpand={handleEditorExpand}
        input={state.editorInput}
        cambiarInput={handleEditorInput}>
        
      </Editor>

      <Previewer 
        expand={state.previewerExpanded} 
        handleExpand={handlePreviewerExpand}
        source ={state.editorInput} >
        
      </Previewer>
    </div>
    
    
  );
}

export default App;
