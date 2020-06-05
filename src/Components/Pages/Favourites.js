import React from 'react';
import FavouriteItem from '../Planet/PlanetItem';
import Spinner from '../Layout/Spinner'





const Favourites = ({planets,loading}) => {
    

    if (!loading && planets===null){
        return <Spinner />
        }

    
     
    
       
   

       else{
        const filter= planets.filter(planet => planet.isFavourite===true);
        return (
            <div style={UserStyle}>
            {filter.map(planet =>(
            <FavouriteItem key={planet.id} planet={planet}/>
    
    
            ))}
          </div>
        )
            
           


       }    
    
    
             
    
}




const UserStyle={
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap:'1rem',

}

export default Favourites
