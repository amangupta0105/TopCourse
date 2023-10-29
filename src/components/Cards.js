import Card from './Card.js';
import './Cards.css';

function Cards (props){
    const data = props.course;

    const filteredData = Object.keys(data)
    .filter((key) => key === props.filterList)
    .reduce((result, key) => {
      result[key] = data[key];
      return result;
    }, {});
    
    let combinedArray = [];
    if(props.filterList !== "All"){
         combinedArray = Object.values(filteredData).flat(); 
    }
   else{
    combinedArray = Object.values(data).flat();
   }   

    return (
        <div className='card-container'>
             { combinedArray.map(function (item,index) {
                return(
                    <Card key={index} course={item} />
                )
            }) }
        </div>
    )
}
export default Cards;