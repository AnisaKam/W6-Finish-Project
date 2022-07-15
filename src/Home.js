import { useState } from 'react';
import { data } from './data';
import Buttons from './Buttons';
import Clothes from './Clothes';

function Home() {

    const [clothes, setClothes] = useState(data);

    const chosenClothes = (searchTerm) => {
        const newClothes = data.filter(element => element.searchTerm === searchTerm);
        setClothes(newClothes);
    } 

    return (
    <div>
        <div className='container'>
            <h2 className='item'> Free shipping for you</h2>
        </div>
        <Buttons filteredClothes={chosenClothes}/>
        <Clothes itemsForSale={clothes}/>
        </div>
    );

}

export default Home;