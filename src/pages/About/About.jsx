import Banner from '../../components/Banner/banner';
import  aboutImage from '../../assets/kasa-banner-about.jpg'
import Collapse from '../../components/Collapse/collapse';

function About() {
  return (
  <div>
    <Banner backgroundImage={aboutImage} />
    <div className='about'>
    <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes." className="collapse-about" />
    <Collapse title='Respect' content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme. " className="collapse-about" />
    <Collapse title='Service' content="lLa bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme." className="collapse-about" />
    <Collapse title='Sécurité' content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes." className="collapse-about" />
    </div>
  </div>);
}

export default About;
