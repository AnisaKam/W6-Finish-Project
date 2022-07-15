    import { useState } from 'react';

function Clothes({itemsForSale}) {

    const [showMore, setShowMore] = useState(false);

    return(<div className='box'>
        {itemsForSale.map((element => {
            const {information, id, name, brand, searchTerm, price, image} = element;
            return(

                <div key={id} className='first-box'>

                        <div className='second-box'>
                        <p>{showMore ? information : information.substring(0,170)}</p>
                        </div>

                    <img src={image} width='400px' height='500px' alt='clothes'/>
            
                    <div className='second-box'>
                        <h3>{name}</h3>
                        <h4>{brand}</h4>
                        <h4>{searchTerm}</h4>
                        <h4>$ {price}</h4>
                    </div>
                </div>
            )
        } ))}
    </div>)
}

export default Clothes;