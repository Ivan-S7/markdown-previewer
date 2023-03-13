import React from 'react';
import '../styles/Editor.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLaptopCode, faMaximize, faDownLeftAndUpRightToCenter} from '@fortawesome/free-solid-svg-icons'




function Editor({expand, actualizarExpand, input, cambiarInput, e}){

  // const [expand, setExpand] = useState(false);
  // const [input, setInput] = useState();
  
  // const [previewer, setPreviewer] = useState({
  //   expanded: false,
  //   output:""
  // })
  // function actualizarExpand(){ 
  //   setExpand(!expand);
  //  setPreviewer({...previewer, expanded:!previewer.expanded})
  //   console.log(previewer)
  // }
  

  return(
    <div className= {expand ? 'container editor expanded' : 'container editor'} id="editor-component">
      <div className='editor-head'>
        <div className='head-left'>
          <FontAwesomeIcon icon={faLaptopCode} className='FontAwesomeIcon'  />
          Editor
        </div>
        <div className='head-right'>
        <FontAwesomeIcon icon={expand ? faDownLeftAndUpRightToCenter : faMaximize} className='FontAwesomeIcon expand' onClick={()=>actualizarExpand()}  />
        </div>
      </div>
      
      <div className='editor-body'>
      <textarea id='editor' className='textarea' value={input} onChange={(e)=> cambiarInput(e)} >

      </textarea>
      </div>
      
    </div>






  )
}

export default Editor;
