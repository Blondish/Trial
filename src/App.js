import './App.css';
import CircularTest from './CircularTest';
import magnifier from "./assets/Magnifier.svg"
import visit from "./assets/Visit Arrow.svg"



function App() {

  // function circularText(txt, radius) {
  //   txt = txt.split("");

  //   var deg = 150 / txt.length,
  //     origin = 289
  //   let textResult;

  //   txt.forEach((ea) => {
  //     ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
  //     textResult += ea;
  //     origin += deg;
  //   });
  //   return textResult;
  // }
  // const text = circularText("MyText", 100)
  return (
    <>
      <div className="container">
        <div className="mainCircle"></div>
        <div className="smallerCircle2"></div>

      </div>
      <div className="smallerCircle1">
        <svg viewBox="0 0 64 64" className="sp-pie">
          <circle className="sp-pie-slice-1" cx="50%" cy="50%" r="25%" />
          <circle className="sp-pie-slice-2" cx="50%" cy="50%" r="25%" />
          <circle className="sp-pie-slice-3" cx="50%" cy="50%" r="25%" />
        </svg>

      </div>
      <div className="wrap">
        <div className="wrap-in">
          <div className="rw">
            <div className="inline push green" id='3' ></div>
          </div>
          <div className="rw">
            <div className="b-l inline push yellow" id='1'></div>
            <div className="b-r inline push blue" id='0'></div>
          </div>
        </div>
        <div className="center"></div>
      </div>
      <div className="container">
        <div className="circTxt" id="test" ><CircularTest text="Circle Name" arc={150} radius={83} /></div>
      </div>
      <img className="magnifier" src={magnifier}></img>
      <img className="visit" src={visit}></img>
    </>
  );
}

export default App;
