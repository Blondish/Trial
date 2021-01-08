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
        <div className="smallerCircle3"></div>
      </div>

    </>
  );
}

export default App;
