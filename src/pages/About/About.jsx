import Banner from '../../components/Banner/banner';
import Collapse from '../../components/Collapse/collapse';

function About() {
  return (
  <div>
    <Banner />
    <Collapse title='Fiabilité' content="le contenu si ca fonctionne " />
    <Collapse title='Respect' content="le contenu si ca fonctionne " />
    <Collapse title='Service' content="le contenu si ca fonctionne " />
    <Collapse title='Sécurité' content="le contenu si ca fonctionne " />
  </div>);
}

export default About;
