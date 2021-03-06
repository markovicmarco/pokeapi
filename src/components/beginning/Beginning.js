import "./Beginning.css";

const Beginning = () => {
  return (
    <div class="beggining">
      <div>
        <div class="row">
          <p className="title">Hello trainer!</p>
          <img alt="" src="https://static.wikia.nocookie.net/nintendo/images/2/2b/SM_Red.png/revision/latest?cb=20161103045713&path-prefix=en"/>
        </div>
      </div>
      <p>Give me your name to start</p>
      <input type="text"/>
    </div>
  )
}

export default Beginning;