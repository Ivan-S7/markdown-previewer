import React from "react";
import '../styles/Previewer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLaptop, faMaximize, faDownLeftAndUpRightToCenter} from '@fortawesome/free-solid-svg-icons'
// import { Remarkable } from 'remarkable';
import { marked } from 'marked';

// var md = new Remarkable();
function Previewer({expand, handleExpand, source}){
    // const [state, setState] = useState({
    //   expanded: false
    // })

    // function expand(){
    //   setState({...state, expanded: !state.expanded});
    //   console.log(state);
    // }

    marked.setOptions({
      breaks: true
    })
  return(
    <div className={expand ? "container previewer expanded" : "container previewer"} id="previewer-component">
      <div className="previewer-head">
        <div className="head-left">
        <FontAwesomeIcon icon={faLaptop} className='FontAwesomeIcon' />
          Previewer
        </div>
        <div className="head-right">
        <FontAwesomeIcon icon={expand ? faDownLeftAndUpRightToCenter : faMaximize} className='FontAwesomeIcon expand' onClick={()=>handleExpand()} />
        </div>
      </div>
      <div id='preview' className="previewer-body" dangerouslySetInnerHTML={{__html: marked(source, {breaks:true})}}>
        
      </div>
    </div>
  )
}

export default Previewer;