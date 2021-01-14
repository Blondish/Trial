import React from "react"
import "./CircularText.css"

const CircularText = ({ maxCar, text, arc, radius }) => {
    const characters = text.split('');
    const step = arc / maxCar
    let degree;


    return (
        <>
            {characters.map((char, i) => {
                if (i === 0) {
                    degree = (characters.length * step / 2 * -1);
                } else {
                    degree += step;
                }
                //let rot = (degree * i - arc / 2);

                return (
                    <span key={i} style={{
                        height: `${radius}px`,
                        position: "absolute",
                        transform: `rotate(${degree}deg)`,
                        transformOrigin: `0 ${radius}px 0`
                    }}>
                        {char}</span>

                )
            }

            )}

        </>

    );
}

export default CircularText