import { useState } from "react"

import './App.css';
import CircularText from './CircularText';
import magnifier from "./assets/Magnifier.svg"
import visit from "./assets/VisitArrow.svg"



function App() {
  const [text, setText] = useState("new")
  const handleChange = (e) => {
    setText(e.target.value)
    console.log(text)
  }

  return (
    <>
      <div><input type="text" value={text} onChange={handleChange} /></div>
      <div className="container">
        <div className="mainCircle">
          <div className="wrap">
            <div className="circTxt" ><CircularText text={text} arc={150} radius={80} /></div>
            <div className="wrap-in">
              <div className="rw">
                <div className="shared top"></div>
              </div>
              <div className="rw">
                <div className="shared bottom-left" style={{ backgroundImage: `url(${magnifier})`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                <div className="shared bottom-right" style={{ backgroundImage: `url(${visit})`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
              </div>
            </div>
            <div className="center"></div>
          </div>
        </div>

      </div>
      <div className="smallerCircle1">
        <svg viewBox="0 0 64 64" className="sp-pie">
          <circle className="sp-pie-slice-1" cx="50%" cy="50%" r="25%" />
          <circle className="sp-pie-slice-2" cx="50%" cy="50%" r="25%" />
          <circle className="sp-pie-slice-3" cx="50%" cy="50%" r="25%" />
        </svg>

      </div>


    </>
  );
}

export default App;
