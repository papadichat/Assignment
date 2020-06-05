import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar'
import Home from './Components/Pages/Home'
import NotFound from './Components/Pages/NotFound'
import Favourites from './Components/Pages/Favourites'


 const  App= () => {
  const [planets,setPlanets]=useState(null);
  const [loading,setLoading]=useState(true);
  // const [isChecked,setChecked]=useState(null);


  useEffect(() => {
    // setLoading(true);
    fetch('https://assignment-machstatz.herokuapp.com/planet')
    .then(res => res.json())
    .then(data=> {
      setPlanets(data);
      console.log(data);
      setLoading(false);
      // setChecked(data.map(planet => [planet.id,false]));

    },[])
    .catch(err => console.log(err))
  

  },[]);

  

  const onToggle = e =>{
    let planets_copy=[...planets];
    // let item={...planets_copy[e.target.value]}
    // item.isFavourite=!item.isFavourite;
    // planets_copy[e.target.value]=item;
    planets_copy.map(planet => planet.id===e.target.id ? planet.isFavourite=!planet.isFavourite:planet)
    setPlanets(planets_copy);
    // let copy=[...isChecked];
    // copy.map(planet=> planet[0]===e.target.id ? planet[1]=!planet[1] : planet );
    // setChecked(copy);
  
  };


 
  return (
    
  <Router>
    <div className="App">
      <Navbar  />
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} planets={planets} loading={loading} onChange={onToggle}/>}/> 
        <Route exact path='/favourites' render={(props) => <Favourites {...props} planets={planets} loading={loading} />}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
  
  );
}

export default App;
