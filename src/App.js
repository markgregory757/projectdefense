import SignupForm from "./components/signUpForm";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const title = "Shooting Range Reviews and Blogs";

  return (
      <div className="App">
  
        <Navbar />
        <div className="content">
            <Home />
        </div>
    </div>
  );
}

export default App;
