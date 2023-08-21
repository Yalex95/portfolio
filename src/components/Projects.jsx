import React, {useState} from 'react'

const projects = ({projects}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const handleCategoy = (selectedCategory) =>{
    setSelectedCategory(selectedCategory);
  }
  const filteredItems = selectedCategory === 'all'
  ? projects : projects.filter(item => item.category === selectedCategory);
  return (
    
    <section id="projects" >
        <div className="container">
            <div className="row pb-4">
                 <h2 className="text-gray">projects</h2>
            </div>
            <div className="category row justify-content-center pb-4">
                <div id="categories" className="btn-group col-4" role="group" aria-label="Basic example">
                    <button onClick={()=>handleCategoy('all')} type="button" className={`btn btn-secondary ${selectedCategory === 'all'? 'active' : ''}`} >All</button>
                    <button onClick={()=>handleCategoy('wordpress')} type="button" className={`btn btn-secondary ${selectedCategory === 'wordpress'? 'active' : ''}`} >WordPress</button>
                    <button onClick={()=>handleCategoy('react')} type="button" className = {`btn btn-secondary ${selectedCategory === 'react'? 'active' : ''}`} >React</button>
                    <button onClick={()=>handleCategoy('php')} type="button" className = {`btn btn-secondary ${selectedCategory === 'php'? 'active' : ''}`} >PHP</button>
                </div>
            </div>
            <div className="box">
                {/* create random id */}
                {filteredItems.map(({id,name,icon,description, category, link}) =>(
                    <div key={id} className="project-item">
                        <div className=" bg-gray project-img">
                            {icon}
                        </div>
                        <div className="text-container">
                            <a href={link} className="project-name">{name} - {category}</a>
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