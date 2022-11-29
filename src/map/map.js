import React, { useEffect, useRef, useContext } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import _ from "lodash";
import { AppContext } from "../AppContext";

export default function Map() {
  const { store, actions } = useContext(AppContext);

  const mapContainerRef = useRef();

  const addMarker = (map) => {
    // Add arrondissements
    map.loadImage(
      "https://maplibre.org/maplibre-gl-js-docs/assets/osgeo-logo.png",
      function (error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);

        // Add data bike stations
        map.addSource("DMR", {
          type: "geojson",
          data: "https://raw.githubusercontent.com/mastersigat/data/main/DMR.geojson",
          cluster: true,
          clusterMaxZoom: 15,
          clusterRadius: 40,
        });

        // Configuration cluster Size and color
        // Configuration cluster label

        map.addLayer({
          id: "cluster-icon",
          type: "symbol",
          source: "DMR",
          filter: ["has", "point_count"],
          layout: {
            "icon-image": "custom-marker",
            "text-field": "{point_count_abbreviated}",
            "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            "text-size": 13,
            "text-anchor": "center",
            "icon-offset": [-10, 7],
          },
        });
        map.addLayer({
          id: "Clusters",
          type: "circle",
          source: "DMR",
          filter: ["has", "point_count"],
          paint: {
            "circle-color": "#FF4136",
            "circle-stroke-color": "#ffffff",
            "circle-radius": 15,
            "circle-opacity": 0.5,
          },
        });

        // map.addLayer({
        //   id: "cluster-text",
        //   type: "symbol",
        //   source: "DMR",
        //   filter: ["has", "point_count"],
        //   layout: {
        //     "text-field": "{point_count_abbreviated}",
        //     "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        //     "text-size": 13,
        //     "text-anchor": "center",
        //   },
        // });

        // map.addLayer({
        //   id: "cluster-count",
        //   type: "symbol",
        //   source: "DMR",
        //   filter: ["has", "point_count"],
        //   layout: {
        //     "text-field": "{point_count_abbreviated}",
        //     "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        //     "text-size": 13,
        //     "text-anchor": "bottom-left",
        //     "text-offset": [1, -1],
        //   },
        // });
      }
    );
  };

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL`,
      center: [2.335, 48.858], // Centrage carte
      zoom: 11.7,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    map.on("load", function () {
      addMarker(map);
    });

    return () => {
      map.remove();
    };
  }, []);

  // useEffect(() => {
  //   store.map && addMarker(store.map);
  // }, [store.map]);

  return (
    <div className="map-wrap">
      <div ref={mapContainerRef} className="map" />
    </div>
  );
}

// mockup data
var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        message: "Foo",
        iconSize: [60, 60],
      },
      geometry: {
        type: "Point",
        coordinates: [-66.324462890625, -16.024695711685304],
      },
    },
    {
      type: "Feature",
      properties: {
        message: "Bar",
        iconSize: [50, 50],
      },
      geometry: {
        type: "Point",
        coordinates: [-61.2158203125, -15.97189158092897],
      },
    },
    {
      type: "Feature",
      properties: {
        message: "Baz",
        iconSize: [40, 40],
      },
      geometry: {
        type: "Point",
        coordinates: [-63.29223632812499, -18.28151823530889],
      },
    },
  ],
};
