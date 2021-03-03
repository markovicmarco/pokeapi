import ValidateColor from "../ValidateColor";
import './EncounterItem.css';
import '../pokedexList/PokedexItem.css'


const EncounterItem = ({ encounter }) => {

    const numberColor = Math.floor(Math.random()*18) + 1;

    const data = encounter.split("-");
    console.log(data)
    
    const region = data.length === 5 ? `${data[0]} ${data[1]}` : data[0];


    const indexOfArea = data.findIndex((str) => str === 'route');
    const area = data.length === 3 ? data[2] : `${data[indexOfArea]} ${data[indexOfArea + 1]}`;
    

    return(
    <>
        <div 
            className="item" 
            style={{
                background: ValidateColor(numberColor)
            }}
            >
            <div>
                Region: {region}<br/>
                Area: {area}
            </div>
            <div className="pokeball"></div>
        </div>
        
    </>
)
}

export default EncounterItem ;