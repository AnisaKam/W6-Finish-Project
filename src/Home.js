import { useState } from 'react';
import { data } from './data';
import Buttons from './Buttons';
import Clothes from './Clothes';
import Information from './Information';

function Home() {

    const [clothes, setClothes] = useState(data);
    
    const chosenClothes = (searchTerm) => {
        const newClothes = data.filter(element => element.searchTerm === searchTerm);
        setClothes(newClothes);
    } 

    const[information, setInformation] = useState ('We make sure that you can make purchases, as in the first place - take goods on hand and order them with fast delivery.Register for the bonus program on the website or in our retail storeGet a personal virtual card, accumulate bonuses and use them to pay for purchases in any storeThe rules are simple: at the time of purchase, you choose whether to spend or save.');
    /*const[information, setInformation] = useState ({Information})
        clickButton = () => {
        setInformation.substring(0,170);
    }*/

    return (
    <div>
        
        <div className='second-box'>
        <Information/>
        <p>{information ? Information : Information.substring(0,170)}</p> 
    
        </div>

        <div className='container'>
            <h2 className='item'> Free shipping for you</h2>
        </div>
        <Buttons filteredClothes={chosenClothes}/>
        <Clothes itemsForSale={clothes}/>
        </div>
    );

}

export default Home;
/*текст*/
/*We make sure that you can make purchases, as in the first place - take goods on hand and order them with fast delivery.Register for the bonus program on the website or in our retail storeGet a personal virtual card, accumulate bonuses and use them to pay for purchases in any storeThe rules are simple: at the time of purchase, you choose whether to spend or save.*/