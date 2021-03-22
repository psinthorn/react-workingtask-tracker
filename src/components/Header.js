import {useLocation} from "react-router-dom"
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
const location = useLocation()
//    const onClick = () => {
//        console.log('click button at header')
//    }


    return (
        <header className='header'>
            {/* <h1 style={headingStyle}>Task Tracker</h1> */}
            <h1>Task Tracker</h1>
        { location.pathname === "/" &&
           <Button 
            onClick={props.onAdd} 
            text={ props.showAddCloseBtn ? 'Close' : 'Add'}
            color={ props.showAddCloseBtn ? 'red' : 'green'}      
           />
        }
            {/* <h2>{props.title}</h2> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Working Tasking Tracker' 
}

Header.propType = {
    title: PropTypes.string.isRequired
}

// // CSS in JS 
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
