import PropTypes from 'prop-types';
import Button from './Button';

const Header=(props)=>{

    

    return(
        <header className="header">
            <h2>{props.title}</h2>
            <Button color={props.showAdd?'red':'green'} text={props.showAdd?'Close':'Add'} onClick={props.onAdd}/>
        </header>
    )
}

Header.defaultProps={
    title:"ToDo-List"
}

Header.propTypes={
    title:PropTypes.string.isRequired
}

export default Header;