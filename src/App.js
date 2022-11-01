import "./App.css";
import data from "./data.json";
import Section from "./components/Section";

function App() {
  // const tab = data.map((elem) => {
  return (
    // <div className="container">
    //   <h1>{elem.category}</h1>
    //   <div className="images">
    //     {elem.images.map((moovie) => {
    //       return <img src={moovie}></img>;
    //     })}
    //   </div>
    // </div>
    <>
      <Section data={data} />
    </>
  );
  // });

  // return (
  //   <>
  //     <div>{tab}</div>
  //   </>
  // );
}

export default App;
