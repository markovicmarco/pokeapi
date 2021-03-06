import "./Beginning.css";
import {useDarkMode} from '../../provider/AuthProvider';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom";
import {useProtectedRoute} from "../../provider/AuthProvider.js";

const Beginning = () => {

  const {isDark} = useDarkMode();
  document.body.style = `background: ${isDark? 'rgb(29, 27, 27)' : 'rgb(253, 253, 253)'}`;

  const [userName, setUserName] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const {setAllowed} = useProtectedRoute();

  const handleName = () => {
    if(userName) {
      dispatch({
        type: "SET_NAME",
        payload: userName
      })
      history.push('/pokedex');
      setAllowed(true);
    }
  }

  return (
    <div 
    className="beginning container"
    style={{color: isDark? "white" : "black"}}>

        <div className="banner">
          <h2 className="title">Hello trainer!</h2>
          <img alt="" src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png"/>
        </div>

      <p className="title">Give me your name to start</p>

      <div>
        <input 
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{background: isDark ? 'rgb(17, 17, 17)' : '#fff'}}/>
        <button onClick={handleName}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  )
}

export default Beginning;