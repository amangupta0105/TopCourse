import './App.css';
import Navbar from './components/Navbar';
import Filter from '../src/components/Filter';
import Cards from './components/Cards';
import {apiUrl, filterData} from './externalData/data.js';
import {useEffect, useState} from 'react';
import Spinner from './components/Spinner';

function App() {

    const [course, setcourse] = useState();
    const[filterList,setfilterList] = useState(filterData[0].title);

    async function datanew() {
        const dump1 = await fetch(apiUrl);
        const output = await dump1.json();
        setcourse(output.data);
    }

    useEffect(function () {
        datanew();
    }, []);

    return (
        <div className="App">

            <div>
                <Navbar/>
            </div>
            <div>
                <Filter data={filterData} filterList={filterList} setfilterList={setfilterList}/>
            </div>
            <div>
                {course? <Cards course={course} filterList={filterList} />: <Spinner/>}
            </div>

        </div>
    );
}

export default App;
