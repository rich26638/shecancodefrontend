import './Home.css'
import Nav from '../../components/Nav/index';
import Explore from '../../components/explore-course/course';
import Header from '../../components/Header/index';
import Alumni from '../../components/alumnisection/index';
// import FirstHome from '../../components/firsthomesection/firstsection';

let Home = () =>{
return(
<div>
<Nav /> 
<Header />
{/* <FirstHome /> */}
<Explore />
<Alumni /> 
</div>
);
}

export default Home;
