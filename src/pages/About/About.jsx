import Banner from '../../components/Banner/banner';
import Collapse from '../../components/Collapse/collapse';

function About() {
  return (
  <div>
    <Banner />
    <div className='about'>
    <Collapse title="Title" content="le contenu si ça fonctionne" className="collapse-about" />
    <Collapse title='Respect' content="le contenu si ca fonctionne " className="collapse-about" />
    <Collapse title='Service' content="le contenu si ca fonctionne " className="collapse-about" />
    <Collapse title='Sécurité' content="le contenu si ca fonctionne " className="collapse-about" />
    </div>
  </div>);
}

export default About;
