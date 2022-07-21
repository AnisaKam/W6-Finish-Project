import { useState } from "react";
import { dataTwo } from "./dataTwo";

function About() {

    const [photos, setPhotos] = useState(0);
    const {image} = dataTwo[photos];

    const next = () => {
        setPhotos((photos => {
            photos--;
            if (photos < 0) {
                return dataTwo.length - 1
            }
            return photos;
        }))
    }

    const back = () => {
        setPhotos((photos => {
            photos ++;
            if (photos > dataTwo.length - 1) {
                photos = 0;
            }
            return photos;
        }))
        }

    return(
<div>   
            <p className="item">As a result of Start Shop work, the client has a user-friendly website 
            a site where you can easily order any of the presented goods. The team delivers on time and was responsive to any change requests. 
            We will always come to your aid, and our fashion designers will select clothes that will suit you. With you since 1975.
            </p>

    <div className="slider">
            <div className="sliderStyle">
                <img src={image} width='300px' alt='clothes'/>
            </div>
    

            <div id="container">
                <button id="back" class="btn" onClick = {back}>Back</button>
                <img id="pictures" src="1.jpeg" alt="clothes"> </img>
                <button id="next"  class="btn" onClick = {next}>Next</button>
            </div>

    </div>
</div>
) 
}

export default About;