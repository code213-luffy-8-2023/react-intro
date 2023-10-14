import { useState } from "react";
import "./App.css";

// Preferably Create components in separate files
// ususally under src/components
const SimpleParagraphHider = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="container-simple">
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore error
          cumque obcaecati iure et quibusdam amet, ex magnam incidunt, impedit
          fugit? Tenetur ipsum ex impedit autem itaque error facilis fugiat!
        </p>
      )}
    </div>
  );
};

// Preferably Create components in separate files
// ususally under src/components
const AnimatedParagraphHider = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="container-simple">
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      <p className={`${isVisible ? "show" : "hide"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore error
        cumque obcaecati iure et quibusdam amet, ex magnam incidunt, impedit
        fugit? Tenetur ipsum ex impedit autem itaque error facilis fugiat!
      </p>
    </div>
  );
};

function App() {
  return (
    <>
      {/*<SimpleParagraphHider />*/}
      {<AnimatedParagraphHider />}
    </>
  );
}

export default App;
