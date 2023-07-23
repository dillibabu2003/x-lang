
import './App.css'
import ReactPlayer from 'react-player';
import React,{useState} from 'react';
function App() {
  
  const [youtubeVideo,setYoutubeVideo]=useState('');

  const [youtubeURL,setYoutubeURL]=useState('');

  const [errorMsg,setErrorMsg]=useState('');
  const handleYoutubeChange=(e)=>{
      setYoutubeVideo(e.target.value);
  }
  const handleYoutubeSubmit=(e)=>{
      e.preventDefault();
      const youtubeRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
      if(youtubeRegex.test(youtubeVideo)){
        setYoutubeURL(youtubeVideo);
        setErrorMsg('');
      }
      else{
        setErrorMsg("Invalid Youtube URL");
      }
  }

  return (
    <>
    <div className="head-bar">
      <div className="logo-and-name">
        <div className="app-name">X-lang</div>
      </div>
      <div className="navbar">
        <div className="navop">Home</div>
        <div className="navop">About</div>
        <div className="navop">Contact</div>
        <div className="navop">Chatbot</div>
      </div>
      <div className="login-and-signup">
        <div className="login">Login</div>
        <div className="login">SignUp</div>
      </div>
    </div>
    <div className='overall'>
      <div className="wrapper">
        <form  className="form-group">
          <input type="text" className='form-control' placeholder='Enter Youtube URL' required onChange={handleYoutubeChange}/>
          <button type='submit' className='upload-button' onClick={handleYoutubeSubmit}>UPLOAD</button>
        </form>
        {errorMsg &&<div className='error-msg'>{errorMsg}</div>}
        <br></br>
        <div className="youtube-box">
          <ReactPlayer url={youtubeURL} className='video'/>
        </div>
      </div>
      <div className='text-box'>
      <form action="#" className='language-and-options'>
          <label for="lang" className='language'>Language</label>
          <select name="languages"className='languages-options' id="lang">
            <option value="javascript">Tamil</option>
            <option value="php">English</option>
            <option value="java">Malayalam</option>
            <option value="golang">Kananda</option>
          </select>
      </form>

        <br/><br/>
        <p className='description'>
        The React useState Hook allows you to have state variables in functional components. You pass the initial state to this function, and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
      </div>
    </div>
    <div className="option-button">
        <div className="find-options">Find Job</div>
        <div className="find-options">Find friends</div>
        <div className="find-options">Find course</div>
   </div>
     </>
  )
}

export default App
