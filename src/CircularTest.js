import React from "react"

const CircularTest = ({ text, arc, radius }) => {
    const characters = text.split('');
    const degree = arc / characters.length;
    let origin = 289;

    return (
        <>
            {characters.map((char, i) => (
                <span style={{ height: `${radius}px`, position: "absolute", transform: `rotate(${degree * i - arc / 2}deg)`, transformOrigin: `0 ${radius}px 0` }}>
                    {char}</span>

            )

            )}

        </>

    );
}

export default CircularTest