import { useState } from "react";
import { dataTwo } from "./dataTwo";

function About() {

    const [photos, setPhotos] = useState (["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"]);

    console.log(photos[7]);

    let i = 0;

    const next = () => {
        setPhotos((photos => {
            photos--;
            if (photos < 0) {
                return photos.length - 1
            }
            return photos;
        }))
    }

    const back = () => {
        setPhotos((photos => {
            photos ++;
            if (photos > photos.length - 1) {
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

            <div id="container">
                <button id="back" className="btn" onClick = {back}>Back</button>
                <img id="photos" src="1.jpg" alt="clothes"/> 
                <button id="next"  className="btn" onClick = {next}>Next</button>
            </div>



    
</div>
) 
}

export default About;