import {useDarkMode} from '../../provider/AuthProvider';
import "./Settings.css";

const Settings = () => {

  const {isDark, changeDark} = useDarkMode();
  document.body.style = `background: ${isDark? 'rgb(29, 27, 27)' : 'rgb(253, 253, 253)'}`;

  
  return(
    <section 
    className="container"
    style={{color: isDark? "white" : "black"}}>
      <h2 className="title">Settings</h2>
      <div 
      className="card-setting"
      style={{background: isDark ? 'rgb(17, 17, 17)' : '#fff'}}
      >
        <h3 className="title">Theme</h3>
        <div className="check-container center">
          <span>Light</span>
            <input type="checkbox" 
            onChange={() => changeDark()}/>
          <span>Dark</span>
        </div>
      </div>
    </section>
  )
}

export default Settings;