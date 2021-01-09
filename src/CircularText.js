import React from "react"

const CircularText = ({ text, arc, radius }) => {
    const characters = text.split('');
    const degree = arc / characters.length;

    return (
        <>
            {characters.map((char, i) => {
                return (
                    <span key={i} style={{
                        height: `${radius}px`,
                        position: "absolute",
                        transform: `rotate(${(degree * i - arc / 2)}deg)`,
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