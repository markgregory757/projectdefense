import SignupForm from "./components/signUpForm";
import "./App.css";

function App() {
  const title = "Shooting Range Reviews and Blogs";

  return (
    <div className="App">
      <h1>{title}</h1>
      <SignupForm />
    </div>
  );
}

export default App;
