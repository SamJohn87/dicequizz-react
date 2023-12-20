
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaIcon from '@fortawesome/free-solid-svg-icons';
import '../styles/Die.css';

const Die = ({ face, rolling }) => {

	switch (face) {
		case 1:
			return <FontAwesomeIcon icon={FaIcon.faDiceOne} className={`Die  
			${rolling && 'Die-shaking'}`} />;
		case 2:
			return <FontAwesomeIcon icon={FaIcon.faDiceTwo} className={`Die  
			${rolling && 'Die-shaking'}`} />;
		case 3:
			return <FontAwesomeIcon icon={FaIcon.faDiceThree} className={`Die  
			${rolling && 'Die-shaking'}`} />;
		case 4:
			return <FontAwesomeIcon icon={FaIcon.faDiceFour} className={`Die  
			${rolling && 'Die-shaking'}`} />;
		case 5:
			return <FontAwesomeIcon icon={FaIcon.faDiceFive} className={`Die  
			${rolling && 'Die-shaking'}`} />;
		default:
			return <FontAwesomeIcon icon={FaIcon.faDiceSix} className={`Die  
			${rolling && 'Die-shaking'}`} />;
	}
}

export default Die;