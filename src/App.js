import Navbar from './components/Header/Navbar.jsx';
import Content from  './components/Header/Content.jsx';
import TopNft from './components2/BodySection/TopNft.jsx';
import Designation from  './components/Employedata/Designation.jsx';
import Creator from './components3/viewcreatorscollection/Creator.jsx'
import Footer from './Footer/Footer.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Content/> 
       <TopNft/> 
       <Designation/>
        <Creator/>
        <Footer/> 
    


      
     
    </div>
  );
}

export default App;
