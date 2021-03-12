import React, { useRef, useState, useEffect } from 'react'

import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

import style from './style'

const Map = ({
    centerLongitude,
    centerLatitude,
    zoom,
}) => {
    const mapContainerRef = useRef(null)
    const [map, setMap] = useState(null)
    const [showResidential, setShowResidential] = useState(false)

    useEffect(() => {
        const map = new maplibregl.Map({
            container: mapContainerRef.current,
            style: style,
            center: [centerLongitude, centerLatitude],
            zoom: zoom,
        })
        map.addControl(new maplibregl.NavigationControl())
        const scale = new maplibregl.ScaleControl({
            maxWidth: 80,
            unit: 'metric'
        })
        map.addControl(scale)
        setMap(map)
    }, [])

    useEffect(() => {
        if (map) {
            map.setLayoutProperty(
                'landuse-residential',
                'visibility',
                showResidential ? 'visible' : 'none'
            )
        }
    }, [showResidential])

    return (
        <div>
            <div
                ref={mapContainerRef}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    backgroundColor: 'white',
                    margin: 10,
                    padding: 10,
                }}
            >
                <input
                    type="checkbox"
                    checked={showResidential}
                    onChange={() => setShowResidential(value => !value)}
                />
                show landuse=residential
            </div>
        </div>
    )
}

export default Map