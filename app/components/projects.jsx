import img from '~/assets/project-recent.png'

import Item from './project-items'

const Projects = () => {
  return (
    <div id="projects">
      <p>Works Showcase</p>
        <div className="flex container">
        <div className="project-img">
            <img src={img} alt="recent project" />
        </div>
        <div className="project-description">

        </div>
        </div>
      <div className="flex container">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </div>
  )
}

export default Projects