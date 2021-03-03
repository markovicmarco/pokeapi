import {useDarkMode} from '../../provider/AuthProvider';
import "./Settings.css";
import { useHistory } from 'react-router-dom';

const Settings = () => {

  const {isDark, changeDark} = useDarkMode();
  document.body.style = `background: ${isDark? 'rgb(29, 27, 27)' : 'rgb(253, 253, 253)'}`;

  const history = useHistory();
  
  return(
    <section 
    className="container"
    style={{color: isDark? "white" : "black"}}>

      <div className="text-left p-absolute">
        <button 
        onClick={() => history.goBack()}
        class="back-button"
        style={{color: isDark? "white" : "black"}}>
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>

      <h2 className="title">Settings</h2>

      <div 
      className="card-setting"
      style={{background: isDark ? 'rgb(17, 17, 17)' : '#fff'}}>
        <h3 className="title">Theme</h3>
        <div className="check-container center first">
          <span>Light</span>
            <input 
            type="checkbox" 
            defaultChecked={isDark}
            onChange={() => changeDark()}/>
          <span>Dark</span>
        </div>
      </div>

    </section>
  )
}

export default Settings;