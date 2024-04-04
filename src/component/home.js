 
import './home.css'
import { Link } from 'react-router-dom'
 
 
const Home = ({   }) => {
  
  return (
    <>
      <div className='home'>
        <div className='top_banner'>
          <div className='contant'>
            <h2>LAPTOPS</h2>
            <p className='offer'>30% off at your first odder</p>
            <p>We understand that every client's needs are different, which is why we offer a variety of pricing options to fit your budget.</p>
            <Link to='/shop' className='link'>Shop Now</Link>
          
          </div>
        </div>
       
      </div>
    </>
  )
}

export default Home