const Section = ({ data }) => {
  return (
    <>
      {data.map((elem) => {
        return (
          <div className="container">
            <h1>{elem.category}</h1>;
            <div className="images">
              {elem.images.map((moovie) => {
                return <img src={moovie}></img>;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Section;
