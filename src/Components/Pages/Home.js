import React,{useState,useEffect} from 'react';
import PlanetItem from '../Planet/PlanetItem';
import Spinner from '../Layout/Spinner';




const Home = ({planets,onChange,loading}) => {


//     const [planets,setPlanets]=useState(null);
//   const [loading,setLoading]=useState(true);
//   const [isChecked,setChecked]=useState(null);

    // useEffect(() => {
    
    //    }, [planets]);

//       const onToggle = e =>{
//         let planets_copy=[...planets];
//         // let item={...planets_copy[e.target.value]}
//         // item.isFavourite=!item.isFavourite;
//         // planets_copy[e.target.value]=item;
//         planets_copy.map(planet => planet.id===e.target.id ? planet.isFavourite=!planet.isFavourite:planet)
//         setPlanets(planets_copy);
//         let copy=[...isChecked];
//         copy.map(planet=> planet[0]===e.target.id ? planet[1]=!planet[1] : planet );
//         setChecked(copy);
      
//       };


          if (loading){
            return <Spinner />
        
       }

        else{
        return (
            
            <div style={UserStyle}>
            {planets.map(planet =>(
            <PlanetItem key={planet.id} planet={planet} onChange={onChange} />
    
    
            ))}
          </div>
         );
    }    
    
    
             
    
}




const UserStyle={
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap:'1rem',

}

export default Home
