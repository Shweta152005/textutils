import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpclick = () =>{
    /*console.log("UpperCase was clicked" + text);*/
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  }
  const cleartext = () =>{
   /* console.log("UpperCase was clicked" + text);*/
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!","success");
  }
  const handleCopy = () => {
    /*console.log("i am copi")*/
    var text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!","success");
  }
  
  const handleLoclick = () =>{
    /*console.log("UpperCase was clicked" + text);*/
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted toLowercase!","success");
    
  }
  const handleOnChange = (event) =>{
    console.log("on change");
    setText(event.target.value);
  }
  
    const [text, setText] = useState('');
    
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#070e3f'}}>
  <h1>{props.heading} </h1>    
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#070e3f'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpclick}>convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoclick}>convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={cleartext}>Clear text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
    </div>
    <div className='container my=3' style={{color:props.mode==='dark'?'white':'#070e3f'}}>
      <h2>text summary</h2>
      <p>{text.split(" ").length} words,{text.length} characters</p>
      <p>{0.008 * text.split(" ").length } minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
