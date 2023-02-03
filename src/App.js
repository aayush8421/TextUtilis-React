import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 
// let name = "<b>Aayush</b>"
function App() {
  return (
    <>
    {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
    {/* <Navbar /> */}
    <Navbar title = "TextUtils"/>
    <div className="container my-3">
      <TextForm heading = "Enter the text to analyse below"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
