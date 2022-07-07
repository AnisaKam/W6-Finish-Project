function Clothes({itemsForSale}) {
    return(<div className="......">
        {itemsForSale.map((element => {
            const {id, name, brand, searchTerm, price, image} = element;
            return(
                <div key={id} className=''>

                    <img src={image} width='400px' height='500px' alt='clothes'/>
            
                    <div className=".....">
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