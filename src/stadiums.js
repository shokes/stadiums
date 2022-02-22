import React, { useState } from "react";

const Stadiums = function ({ stadium, removeStadium }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      {stadium.map((stad) => {
        const { image, id, name, description, capacity } = stad;

        // console.log(id);

        return (
          <article key={id} className="article">
            <img src={image} alt={name} />
            <footer>
              <div className="flex">
                <h2>{name}</h2>
                <h3 className="capacity">{capacity}</h3>
              </div>

              <p>
                {readMore ? description : `${description.substring(0, 200)}...`}{" "}
                <button
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                  className="link"
                >
                  {readMore ? "show less" : "read more"}
                </button>
              </p>

              <div className="button-center">
                <button
                  className="btn"
                  onClick={() => {
                    removeStadium(id);
                  }}
                >
                  {" "}
                  Remove
                </button>
              </div>
            </footer>
          </article>
        );
      })}
    </>
  );
};

export default Stadiums;
