import React, {useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateUniqueId } from '../utils/utils'; // Path to your utils file

const projects = ({sectionRefs, projects}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const handleCategoy = (selectedCategory) =>{
    setSelectedCategory(selectedCategory);
  }
  const uniqueCats = [...new Set(projects.map(obj => obj.category))];
  const filteredItems = selectedCategory === 'all'
  ? projects : projects.filter(item => item.category === selectedCategory);
  
  const projectsRef = useRef(null);
  sectionRefs.current['projects'] = projectsRef;
  return (
    
    <section id="projects" ref={projectsRef}>
        <div className="container">
            <div className="row pb-4">
                 <h2 className="text-gray">projects</h2>
            </div>
            <div className="category row justify-content-center pb-4">
                <div id="categories" className="btn-group col-4" role="group" aria-label="Basic example">
                    <button onClick={()=>handleCategoy('all')} type="button" className={`btn btn-secondary ${selectedCategory === 'all'? 'active' : ''}`} >All</button>
                    {uniqueCats.map(item =>(
                        <button key={generateUniqueId()} onClick={()=>handleCategoy(item)} type="button" className={`btn btn-secondary text-capitalize ${selectedCategory === item? 'active' : ''}`} >{item}</button>

                    ))}
                  
                </div>
            </div>
            <div className="box">
                {/* create random id */}
                {filteredItems.map(({id,name,icon,description, category, link}) =>(
                    <div key={id} className="project-item">
                        <div className="project-img">
                        <FontAwesomeIcon icon={icon} />
                        </div>
                        <div className="text-container">
                            <a href={link} className="project-name">{name}</a>
                            <p>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}


export default projects