import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='purple lighten-3'>
      <div className='nav-wrapper'>
        <Link
          to='/'
          className='brand-logo'
        >
          React SPA
        </Link>
        <ul
          id='nav-mobile'
          className='right hide-on-med-and-down'
        >
          <li>
            {/* <a href='/contacts'> */}
            <Link to='/contacts'>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to='/about'
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
