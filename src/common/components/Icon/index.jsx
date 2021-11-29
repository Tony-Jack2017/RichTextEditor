import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Icon = (prop) => {
  return (
    <FontAwesomeIcon icon={prop.icon} size='1x' style={{color: prop.active ? 'black' : '#CCCCCC'}}/>
  )

}

export default Icon