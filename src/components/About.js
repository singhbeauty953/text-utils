import React, { useState } from 'react'

export default function About(props) {
  //  const [myStyle, SetMyStyle]=useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  //  }
  // )
  let myStyle={
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
    // border: '2px solid',
    // borderColor: props.mode ==='dark'?'white':'#042743'
  }

  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
    <h1 className='my-3'>About us</h1>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Analyze your text</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or preview your text.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Free to use</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
           Textutils is a free word counter tool that provides you instant word and Character Count for a given text. 
           Textutils report the number of words and characters left.

        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>Browser Compatible</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          This word counter Works in any web browser such as chrome, Firefox, Internet Explorer, safari, Opera. 
          It suits to count charachter in facebook, blogs, books, excel, document, pdf document, essays, etc.
        </div>
      </div>
    </div>
  </div>
  </div>
  
  )
}
