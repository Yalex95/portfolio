import { Link , useLocation} from "@remix-run/react"

const Navigation = () => {
    
  const location= useLocation()
  return (
    <nav>
        <Link 
        to='/' 
        className={location.pathname === '#hero'?'active':''}>Home</Link>
        <Link 
        to='#about'
        className={location.pathname === '#about'?'active':''}>About</Link>
        <Link 
        to='#projects'
        className={location.pathname === '#projects'?'active':''}>Projects</Link>
        
    </nav>
  )
}

export default Navigation