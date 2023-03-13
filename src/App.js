import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogsFetch } from "./dogState";
import "./App.css";

function App() {
  const dogs = useSelector((state) => state.dogs.dogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogsFetch());
  }, [dispatch]);
  console.log(dogs);

  return (
    <div className="App">
      <h1>Dogs Species</h1>
      <p>
        Images of different species of dogs . Lets of dogs for your viewing
        pleasure.
      </p>
      <hr />
      <div className="Gallery">
        {dogs.length === 0 ? (
          <p>Loading dogs...</p>
        ) : (
          dogs.map((dog) => (
            <div key={dog.id} className="row">
              <div className="column column-left">
                <img
                  alt={dog.name}
                  src={dog.image_url}
                  width="200"
                  height="200"
                />
              </div>
              <div className="column column-right">
                <h2>{dog.name}</h2>
                <h5>Temperament: {dog.temperament}</h5>
                <p>{dog.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <button>View More Dogs</button>
    </div>
  );
}

export default App;


