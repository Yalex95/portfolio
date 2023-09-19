import React, {useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateUniqueId } from '../utils/utils'; 

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
                 <h2 className="text-gray">Works showcase </h2>
            </div>
            <div className="category row justify-content-center pb-5">
                <div id="categories" className="btn-group col-12 col-md-4" role="group" aria-label="Basic example">
                    <button onClick={()=>handleCategoy('all')} type="button" className={`btn btn-secondary ${selectedCategory === 'all'? 'active' : ''}`} >All</button>
                    {uniqueCats.map(item =>(
                        <button key={generateUniqueId()} onClick={()=>handleCategoy(item)} type="button" className={`btn btn-secondary text-capitalize ${selectedCategory === item? 'active' : ''}`} >{item}</button>

                    ))}
                  
                </div>
            </div>
            <div className="box">
                {/* create random id */}
                {filteredItems.map(({name,icon,description, category, link,github_link}) =>(
                    <div key={generateUniqueId()} className="project-item">
                        <div className="overlay"></div>
                        
                        <div className="project-img">
                        <FontAwesomeIcon icon={icon} />
                        </div>
                        <div className="text-container">
                            <p className="project-name">{name}</p>
                        </div>
                        <div className="desc">
                            <p>{description}</p>
                            <div className="flex justify-content-start d-flex">
                                <a href={link} className='btn btn-primary btn-sm me-3'>Link</a>
                                {
                                (github_link != '' && github_link) ? 
                                <a href={github_link} className='btn btn-outline-info btn-sm repo-btn'><FontAwesomeIcon icon="fa-brands fa-github" className='me-2' />Repository</a>
                                : ''}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}


export default projects