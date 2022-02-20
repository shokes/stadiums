const Stadiums = function ({ stadium }) {
  return (
    <>
      {stadium.map((stad) => {
        // console.log(stad);
        const { image, id, name, description, capacity } = stad;

        const removeHandler = function () {
          console.log("button working");
        };

        return (
          <article key={id} className="article">
            <img src={image} alt={name} />
            <div className="flex">
              <h2>{name}</h2>
              <h3 className="capacity">{capacity}</h3>
            </div>

            <h4>
              {description}
              <p>Read More</p>
            </h4>
            <div className="button-center">
              <button className="btn" onClick={removeHandler}>
                Remove This
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Stadiums;
