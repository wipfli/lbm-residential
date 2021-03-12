import React from 'react'
import ReactDOM from 'react-dom'

import Map from './Map'

ReactDOM.render((
  <Map
    centerLongitude={8.047798}
    centerLatitude={47.359256}
    zoom={13}
  />
), document.getElementById('root'))