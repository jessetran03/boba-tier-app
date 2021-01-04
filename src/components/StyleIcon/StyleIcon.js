import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styleIconMap = {
  'Star': <FontAwesomeIcon className='blue' icon='list-ul' />,
  'default': null
}

export default function styleIcon({ style='default' }) {
  return styleIconMap[style]
}
