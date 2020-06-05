
import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types'


const PlanetItem = ({planet,onChange}) => {

    const [checked,setChecked]=useState(false);
    //sessionStorage.setItem(planet.id,true);
    // useEffect(() => {
    // sessionStorage.setItem(planet.id,false);

    // }, [planet.id])


        const onChange1= (e) =>{
        onChange(e);
        let val=sessionStorage.getItem(planet.id);
        console.log(typeof(val));
        var mybool = JSON.parse(val);
        console.log(typeof(mybool));
        sessionStorage.setItem(planet.id,!mybool);
        setChecked(!checked);
        
        
        
    }

  
        return (
            <div className='card text-center'>
                    <ul>
                        <li>
                            {planet.name}
                        </li>
                   </ul> 
                   
                   <div >
                   <label>
                  <input type="checkbox" id={planet.id} onChange={onChange1} checked={JSON.parse(sessionStorage.getItem(planet.id))}/>
                    Mark as favourite
                   </label>
                   </div>
                   </div>
               )

    


    
}

PlanetItem.propTypes={
    planet: PropTypes.object.isRequired,

};

export default PlanetItem
