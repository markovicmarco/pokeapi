import {useDarkMode, useNumItems} from '../../provider/AuthProvider';
import "./Settings.css";
import { useHistory } from 'react-router-dom';

const Settings = () => {

  const {isDark, changeDark} = useDarkMode();
  const {itemsPerPage, setItemsPerPage} = useNumItems();
  document.body.style = `background: ${isDark? 'rgb(29, 27, 27)' : 'rgb(253, 253, 253)'}`;

  const history = useHistory();
  
  return(
    <section 
    className="container"
    style={{color: isDark? "white" : "black"}}>

      <div className="text-left p-absolute">
        <button 
        onClick={() => history.goBack()}
        className="back-button"
        style={{color: isDark? "white" : "black"}}>
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>

      <h2 className="title">Settings</h2>

        {/* Theme */}
      <div 
      className="card-setting margin-b"
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

        {/* Items per page */}
      <div 
      className="card-setting"
      style={{background: isDark ? 'rgb(17, 17, 17)' : '#fff'}}>
        <h3 className="title">Items per page</h3>
        <div className="check-container center first">
          <select 
          style={{background: isDark ? 'black' : '#fff'}}
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(e.target.value)}>
            <option value="4">4 items</option>
            <option value="8">8 items</option>
            <option value="12">12 items</option>
            <option value="16">16 items</option>
            <option value="20">20 items</option>
          </select>
        </div>
      </div>

    </section>
  )
}

export default Settings;