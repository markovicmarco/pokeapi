import ValidateColor from "../ValidateColor";
import './EncounterItem.css';
import '../pokedexList/PokedexItem.css'


const EncounterItem = ({ encounter }) => {

    const numberColor = Math.floor(Math.random()*18) + 1;

    const data = encounter.split("-");
    
    const region = data.length === 5 ? `${data[0]} ${data[1]}` : data[0];


    const indexOfArea = data.findIndex((str) => str === 'route');
    const area = data.length === 3 ? data[2] : `${data[indexOfArea]} ${data[indexOfArea + 1]}`;
    

    return(
    <div className="col-lg-3 col-sm-2">
        <div 
        className="card encounter" 
        style={{background: ValidateColor(numberColor)}}>
            <div>
                <div className="margin-b">
                    <span className="title-encounter">Region:</span>
                    <span className="cloud">{region}</span>
                </div>
                <div>
                    <span className="title-encounter">Area:</span>
                    <span className="cloud">{area}</span>
                </div>
            </div>
            <div className="pokeball"></div>
        </div>
    </div>
)
}

export default EncounterItem ;