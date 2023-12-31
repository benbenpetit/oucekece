import React, { FC } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps'
import MAP from '@/core/data/constants/map'
import { ICityFull } from '@/core/types/ICity'
import { convertToDegrees } from '@/core/utils/coordinates'

interface Props {
  city: ICityFull
}

const Back: FC<Props> = ({ city }) => {
  return (
    <div className="c-back">
      <ComposableMap width={1000}>
        <Geographies geography={MAP}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Marker coordinates={[city.lng, city.lat]}>
          <circle cx={0} cy={0} r={6} fill="#f00" />
        </Marker>
      </ComposableMap>
      <div className="c-back__name">
        <span>
          {city.name} - {city.country}
        </span>
      </div>
      <div className="c-back__coordinates">
        {city.direction !== 'left' && city.direction !== 'right' && (
          <span>{convertToDegrees(city.lat, 'y')}</span>
        )}
        {city.direction !== 'top' && city.direction !== 'bottom' && (
          <span>{convertToDegrees(city.lng, 'x')}</span>
        )}
      </div>
    </div>
  )
}

export default Back
