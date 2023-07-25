import './Banner.scss'

const Banner = ({ backgroundImage }) => {
    return (
        <div className='banner' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className='banner__text'><span>Chez vous,</span> <span>partout et ailleurs</span></h1>
        </div>
    )
}

export default Banner;
