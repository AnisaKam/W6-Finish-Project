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
 // для создания кода "показать больше/меньше (showMore)" мы 1:создаем константу с текстом.
    const information = 'We make sure that you can make purchases, as in the first place - take goods on hand and order them with fast delivery.Register for the bonus program on the website or in our retail storeGet a personal virtual card, accumulate bonuses and use them to pay for purchases in any storeThe rules are simple: at the time of purchase, you choose whether to spend or save'
 // 2: создаем константу с состояниями, смена которого будет влиять, будем мы видеть весь текст или нет showMore и setShowMore:
    const [showMore, setShowMore] = useState(false)
 // 3: если состояние = false покажи текст целиком, в другом случае сократи кол-во символов до 170 

    return (
    <div>
        
        <div className='second-box'>
        <p>{showMore ? information : information.substring(0,170)}
        <button onClick={() => setShowMore(!showMore)}>show more...</button>
        </p>
    
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


/* то, что делала я (для истории):
    const[information, setInformation] = useState ('We make sure that you can make purchases, as in the first place - take goods on hand and order them with fast delivery.Register for the bonus program on the website or in our retail storeGet a personal virtual card, accumulate bonuses and use them to pay for purchases in any storeThe rules are simple: at the time of purchase, you choose whether to spend or save.');
    const[information, setInformation] = useState ({Information})
        clickButton = () => {
        setInformation.substring(0,170);

    return (
    <div>
        
        <div className='second-box'>
        <Information/> - создавать было не нужно!
        <p>{information ? Information : Information.substring(0,170)}</p>
    
        </div>    
    }*/