'use client';

import * as yamaps3 from '@yandex/ymaps3-types';
import type { YMapLocationRequest } from '@yandex/ymaps3-types'
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';

ymaps3.strictMode = true;

const [ymaps3Reactify, ymaps3Controls] = await Promise.all([
    yamaps3.import('@yandex/ymaps3-reactify'),
    ymaps3.import('@yandex/ymaps3-controls@0.0.1')
])

const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);

const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls, YMapMarker, geolocation, YMapListener } = reactify.module(ymaps3);
const { YMapGeolocationControl, YMapZoomControl } = reactify.module(ymaps3Controls);

ymaps3.route({

})


export default function Map() {
    const initialized = useRef(false);

    const mapRef = useRef<yamaps3.YMap>();
    const initialLocation: YMapLocationRequest = useMemo((): YMapLocationRequest => {
        return {
            center: [27.561824, 53.902287],
            zoom: 12
        };
    }, []);

    const initialize = useCallback(() => {
        const map = mapRef.current;
        if (!map) return;

        // geolocation.getPosition().then(({ coords }) => {
        //     map.setLocation({ center: coords })
        // })
    }, []);

    // useEffect(() => {
    //     if (!initialized.current) {
    //         initialize();
    //         initialized.current = true;
    //     }
    // }, [initialize]);

    return <YMap location={initialLocation} mode="vector" ref={mapRef as React.MutableRefObject<yamaps3.YMap>}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />

        <YMapControls position='right'>
            <YMapZoomControl />
        </YMapControls>

        <YMapControls position='bottom right'>
            <YMapGeolocationControl />
        </YMapControls>

        {/* <YMapListener /> */}
        {/* <YMapMarker coordinates={[25.229762, 55.289311]} draggable={true}>
            <section>
                <h1>You can drag this header</h1>
            </section>
        </YMapMarker> */}
    </YMap>;
}
