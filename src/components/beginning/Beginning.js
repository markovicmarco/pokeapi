import "./Beginning.css";

const Beginning = () => {
  return (
    <div className="beggining">
      <div>
        <div className="row">
          <p className="title">Hello trainer!</p>
          <img alt="" src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png"/>
        </div>
      </div>
      <p>Give me your name to start</p>
      <input type="text"/>
    </div>
  )
}

export default Beginning;