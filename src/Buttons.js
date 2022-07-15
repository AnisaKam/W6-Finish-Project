function Buttons({filteredClothes}) {
    return (<div className="container">
        <button className="item" onClick={() => filteredClothes('evening dress')}>evening dress</button>
        <button className="item" onClick={() => filteredClothes('business dress style')}>business dress</button>
        <button className="item" onClick={() => filteredClothes('pants style evening')}>pants</button>
        <button className="item" onClick={() => filteredClothes('sweatpants')}>sweatpants</button>
        <button className="item" onClick={() => filteredClothes('classic overalls')}>classic overalls</button>
        <button className="item" onClick={() => filteredClothes('sports overalls')}>sports overalls</button>       
    </div>)
}

export default Buttons;
