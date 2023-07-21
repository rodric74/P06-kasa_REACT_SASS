// Banner.jsx
import './Banner.scss'

const Banner = ({ backgroundImage }) => {
    return (
        <div className='banner' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className='banner__text'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner;
