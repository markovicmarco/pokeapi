import {isDark, changeDark} from '../../provider/AuthProvider';

const Settings = () => {

  document.body.style = `background: ${isDark? 'black' : 'white'}`;

  
  return(
    <div>Settings
      <input type="checkbox"/>
    </div>
  )
}

export default Settings;