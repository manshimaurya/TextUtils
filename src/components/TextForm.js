import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    //setText("newtext");
    const handleUpClick=()=>{
        console.log("uppercase was clicked !  "+ text);
        setText("you have clicked on handleUpClick");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick=()=>{
        console.log("lowercase was clicked !  "+ text);
        setText("you have clicked on handleUpClick");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick=()=>{
        console.log("clear !");
        setText("you have clicked on handle clear");
        let newText=""
        setText(newText);
        props.showAlert("Textarea is cleared","success");
    }
    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const handleOnChange=(event)=>{
        //console.log("onchange !");
        setText(event.target.value);
    }
  return (
    <>
    
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control bg-'#bfd6f7'" value={text} style={{backgroundColor:props.mode==='dark'?'#0e1a40':'#bfd6f7',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <div>
                <button type="button" className="btn btn-danger mx-3 my-3" onClick={handleUpClick}>Convert to uppercase</button>
                <button type="button" className="btn btn-primary mx-3 my-3" onClick={handleLowClick}>Convert to lowercase</button>
                <button type="button" className="btn btn-info mx-3 my-3" onClick={handleClearClick}>Clear</button>
                <button type="button" className="btn btn-warning mx-3 my-3" onClick={handleCopy}>Copy Text</button>
                <button type="button" className="btn btn-success mx-3 my-3" onClick={handleExtraSpaces}>Remove spaces</button>
            </div>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p> {0.008*text.split(" ").length} Minute read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here !"}</p>
        </div>
    </>
  )
}
