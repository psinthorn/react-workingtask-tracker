import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <p>
                copyright &copy; 2021
            </p>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Footer
