import React, {useState} from 'react'
//import propTypes from 'prop-types'


export default function Form(props) {

  const handleupclick= ()=>{
    let newText=text.toUpperCase();
    settext(newText)
    props.showAlert("Converted To UpperCase","success");
    // setInterval(() => {
    //     document.title = "Uppercase"
    // }, 3000);
  
  }
  const handlednclick= ()=>{
    let newText=text.toLowerCase();
    settext(newText)
    props.showAlert("Converted To LowerCase","success");
  //   setInterval(() => {
  //     document.title = " Lowerercase"
  // }, 1500);
  }
  const handlecleclick= ()=>{
    let newText=" ";
    settext(newText)
    props.showAlert("Text is Cleared","success")
    
  }
  const handlecopy= ()=>{
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text is Copied","success");
  }
  const handleonchange = (event)=>{
    settext(event.target.value)
  }
  const [text, settext]= useState('');
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white' : 'black'}}>
    <h1 className='mb-4'>{props.heading}</h1>
  <div className="mb-3">
    <textarea placeholder='Enter text here' className="form-control" value={text} onChange={handleonchange} 
    style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode === 'dark'? 'white' : 'black'}}id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={handleupclick}>Convert to uppercase</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={handlednclick}>Change to lowercase</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={handlecleclick}>Clear Text</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={handlecopy}>Copy Text</button>


</div>
<div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
   <h2>Your Text Summary</h2>
   <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Charactes</p>
   <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
   <h2>Preview</h2>
   <p>{text.length>0?text:"Nothing to Preview!"}</p>


</div>
</>
  )
}

