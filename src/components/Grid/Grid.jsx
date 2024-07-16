import Card from "../Card/Card";
import './Grid.css'
function Grid({numberOfCards}){
    return (
       <div className="grid">
         {Array(numberOfCards).fill(<Card/>).map((el, idx)=>{
            return <Card key={idx} ico/>
        
        })}
       </div>
    )
}

export default Grid;