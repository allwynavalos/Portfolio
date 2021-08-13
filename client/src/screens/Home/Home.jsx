import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {


  return (
    <Layout>
      <div class="home">
      <div id="name">
        <div class='name1'>
        
          <h1 class="em-wider">O</h1>
          <h1 class="em-wider">L</h1>
          <h1 class="em-wider">L</h1>
          <h1 class="em-wider">I</h1>
          <h1 class="em-wider">E</h1>
     
        </div>
        <div class='name2'>
          <h1 class="em-wider">A</h1>
          <h1 class="em-wider">V</h1>
          <h1 class="em-wider">A</h1>
          <h1 class="em-wider">L</h1>
          <h1 class="em-wider">O</h1>
          <h1 class="em-wider">S</h1>
        </div>
          
        <h2 class="desc"> I create value through experience</h2>
        <Link  to={'/projects'}><button className="project-button"> Projects</button> </Link>
        <Link  to={'/about'}><button className="about-button">About </button> </Link>
        
    </div>
    </div>
    </Layout>
    
    
    
    )
  }
  export default Home 