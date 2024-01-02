import React, {useState} from 'react'



export default function TextForm(props) {
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUp = ()=>{
        let newText=text.toUpperCase();
        
        if(text.length>0){
            setText(newText);
            props.showAlert("Converted to Uppercase!","success");
        }
        else{
            props.showAlert("Text Area is Empty!","warning");
        }
        
    }

    const handleLow = ()=>{
        let newText=text.toLowerCase();
        
        if(text.length>0){
            setText(newText);
            props.showAlert("Converted to Lowercase!","success");
        }
        else{
            props.showAlert("Text Area is Empty!","warning");
        }
    }

    const handleTit = ()=>{
        
        if(text.length>0){
            let newText=text.toLowerCase().split(' ');
            for(let i=0;i<newText.length;i++){
                newText[i]=newText[i].charAt(0).toUpperCase()+newText[i].slice(1);
            }
            setText(newText.join(' '));
            props.showAlert("Converted to Titlecase!","success");
        }
        else{
            props.showAlert("Text Area is Empty!","warning");
        }
    }

    const handleSpace = ()=>{
        
        if(text.length>0){
            let newText=text.split(/[ ]+/);
            setText(newText.join(' '));
            props.showAlert("Extra Spaces Removed!","success");
        }
        else{
            props.showAlert("Text Area is Empty!","warning");
        }
    }

    const handleCopy = ()=>{
        if(text.length>0){
            navigator.clipboard.writeText(text);
            props.showAlert("Text Coppied!","success");
        }
        else{
            props.showAlert("Text Area is Empty!","warning");
        }
    }

    const handleClear = ()=>{
        
        if(text.length>0){
            setText("");
            props.showAlert("Area Cleared!","success");
        }
        else{
            props.showAlert("Text Area is Empty!","warning");
        }
    }

    
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div style={{color : props.mode === 'light' ? 'black' : 'white'}}>
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor : props.mode==='light'?'rgb(248,249,250)':'rgb(31,37,41)', color : props.mode === 'light' ? 'black' : 'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUp}>Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLow}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleTit}>Convert to TitleCase</button>
        <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Area</button>
    </div>
    <div className='container my-4' style={{color : props.mode === 'light' ? 'black' : 'white'}}>
        <h1>Your text Summary</h1>
        
        <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.length} characters.</p>
    </div>
    </>
  )
}
