
import React,{useState} from 'react';
import PropTypes from 'prop-types'


const PlanetItem = ({planet,onChange}) => {

    const [checked,setChecked]=useState(true);

        const onChange1=(e) =>{
        onChange(e);
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
                  <input type="checkbox" id={planet.id} onChange={onChange1} checked={checked}/>
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
