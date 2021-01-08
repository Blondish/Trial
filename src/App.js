import './App.css';

function App() {
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
      <div class="wrap">
        <div class="wrap-in">
          <div class="rw">
            <div class="inline push green" id='3' ></div>

          </div>
          <div class="rw">
            <div class="b-l inline push yellow" id='1'></div>
            <div class="b-r inline push blue" id='0'></div>
          </div>
        </div>
        <div class="center"></div>
      </div>

    </>
  );
}

export default App;
