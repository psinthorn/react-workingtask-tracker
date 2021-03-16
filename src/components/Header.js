import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

   const onClick = () => {
       console.log('click button at header')
   }


    return (
        <header className='header'>
            {/* <h1 style={headingStyle}>Task Tracker</h1> */}
            <h1>Task Tracker</h1>
           <Button onClick={onClick} text='Add' />
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
