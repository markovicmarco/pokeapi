import "./Beginning.css";

const Beginning = () => {
  return (
    <div className="beginning container">
        <div className="banner">
          <h2 className="title">Hello trainer!</h2>
          <img alt="" src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png"/>
        </div>
      <p className="title">Give me your name to start</p>
      <div>
        <input type="text"/>
        <button>
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  )
}

export default Beginning;