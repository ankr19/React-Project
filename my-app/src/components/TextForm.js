import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('UpperCase is clicked '+text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "success");
  }

  const handleUpClick2 = () => {
    // console.log('UpperCase is clicked '+text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase", "success");
  }

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy to clipboard", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
    const [text, setText] = useState('');
    // text = "new text"; // wrong way to declaring the text
    //setText("new text"); // correct way to declaring the text
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
      <div className="np-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?"grey":'white', 
          color: props.mode==='dark'?'white':'black'}} ></textarea>
      </div>
      <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handleUpClick2}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p> {text.split(" ").length} words with {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minute Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

