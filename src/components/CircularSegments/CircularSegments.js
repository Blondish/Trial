import "./CircularSegments.css"
import React, { useState } from 'react'

export default function CircularSegments2() {
    const [red, setRed] = useState(2);
    const [blue, setBlue] = useState(4);
    const [gray, setGray] = useState(2);

    function drawSequence(startOffset, numElements, endOffset) {
        let result = "", tail = 1, lenght = segmentLenght();

        if (numElements <= 0) { return "0 100"; }
        if (startOffset > 0) { result += "0 " + startOffset + " " }
        if (endOffset > 0) { tail += endOffset; }

        for (var i = 1; i <= numElements; i++) {
            result += lenght + " ";
            if (i < numElements) { result += "1 " }
        }
        return result += " " + tail;
    }
    function drawSequenceDot(numElements) {
        var lenght = segmentLenght() + 1;
        var offset = 100, result = "";

        for (var i = 1; i < numElements; i++) {
            offset = offset - lenght;
            result += " 0 " + (lenght);
        }
        return result = "0 " + offset + result;
    }

    function segmentLenght() {
        return (100 / (red + blue + gray)) - 1;
    }
    function setOffset(skipSegments) { // calculates the sections
        return (((skipSegments) * segmentLenght()) + skipSegments)
    }
    function setOffsetDot() {

        return (100 / (red + blue + gray) / 2) + 0.5;
    }

    let redStyle = red !== 0 ? { strokeDasharray: drawSequenceDot(red), strokeDashoffset: setOffsetDot() } : { visibility: "hidden" }

    return (
        <>

            <div className="smallerCircle1">
                <svg viewBox="0 0 64 64" className="sp-pie">
                    <circle className="sp-pie-red" style={{ strokeDasharray: drawSequence(setOffset(blue + gray), red, 0) }} cx="50%" cy="50%" r="25%" />

                    <circle className="sp-pie-red sp-pie-red-dot" style={redStyle} cx="50%" cy="50%" r="25%" />
                    <circle className="sp-pie-blue" style={{ strokeDasharray: drawSequence(0, blue, setOffset(red + gray)) }} cx="50%" cy="50%" r="25%" />
                    <circle className="sp-pie-gray" style={{ strokeDasharray: drawSequence(setOffset(blue), gray, setOffset(red)) }} cx="50%" cy="50%" r="25%" />
                </svg>
            </div>

            <div style={{ top: "0%", position: "absolute" }}>
                <button disabled={red === 10} onClick={() => setRed(red + 1)}>+red</button>
                <button disabled={blue === 10} onClick={() => setBlue(blue + 1)}>+blue</button>
                <button disabled={gray === 10} onClick={() => setGray(gray + 1)}>+gray</button>
                <button disabled={red === 0} onClick={() => setRed(red - 1)}>-red</button>
                <button disabled={blue === 0} onClick={() => setBlue(blue - 1)}>-blue</button>
                <button disabled={gray === 0} onClick={() => setGray(gray - 1)}>-gray</button>
            </div>
        </>
    );
}

