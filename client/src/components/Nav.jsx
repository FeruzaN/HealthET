
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav>
        <Link to="/about"> About Us</Link>
        <Link to="/contact"> Contact US</Link>
      </nav>
    </div>
  )
}

export default Nav