import './Banner.scss'

const Banner = ({ backgroundImage, text, className }) => {
    return (
        <div className={`banner ${className}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            {text && <h1 className='banner__text'>{text}</h1>}
        </div>
    )
}

export default Banner;
