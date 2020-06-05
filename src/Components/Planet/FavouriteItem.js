
import React from 'react';
import PropTypes from 'prop-types'


const FavouriteItem = ({planet}) => {
    

    


         
        
        return (
     <div className='card text-center'>
             <ul>
                 <li>
                     {planet.name}
                 </li>
            </ul> 
            
           
            

                
                 
                
             
                
            </div>
        )
    
}

FavouriteItem.propTypes={
    planet: PropTypes.object.isRequired,

};

export default FavouriteItem
