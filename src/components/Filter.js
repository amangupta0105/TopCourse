import './Filter.css';

function Filter (props){
    const setfilterList = props.setfilterList;
    
    function filterHandler(category){
        setfilterList(category);            
    }

    return (
        <div>
            <div className='button-container'>
                {props.data.map(function (item,index){
                   return(
                    <button key={index} className='titlebutton' onClick={() => filterHandler(item.title)}>
                        {item.title}
                    </button>
                   )
                })}
            </div>
        </div>
    )
}
export default Filter;