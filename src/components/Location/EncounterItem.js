import ValidateColor from "../ValidateColor";
import './EncounterItem.css';


const EncounterItem = ({ encounter }) => {

    const numberColor = Math.floor(Math.random()*18) + 1;

    return(
    <>
        <li 
        className="item" 
        style={{
            background: ValidateColor(numberColor)
        }}
        >{encounter}</li>
    </>
)
}

export default EncounterItem ;