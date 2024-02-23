//import './App.css';
import './assets/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Socials from './components/Socials';
import ScrollBullets from './components/ScrollBullets';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Tools from './components/Tools';
import Career from './components/Career';
import RecentProjects from './components/RecentProjects';
import MainLayout from './layout/MainLayout';
function App() {
  return (
    <div className="App">
      <MainLayout>
        {/* <Header /> */}
        <Socials />
        <ScrollBullets />

        <Banner id="banner" />
        <AboutMe />
        <Tools />
        <Career />
        <RecentProjects />

        {/* <Footer /> */}
      </MainLayout>
    </div>
  );
}

export default App;
