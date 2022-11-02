const Section = ({ data }) => {
  return (
    <>
      {data.map((elem, index) => {
        return (
          <div key={index} className="container">
            <h1>{elem.category}</h1>;
            <div className="images">
              {elem.images.map((moovie, num) => {
                return <img key={num} src={moovie}></img>;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Section;
