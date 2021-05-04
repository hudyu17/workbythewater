import { Component } from 'react';
import L from "leaflet";
import styled from "styled-components";
import { MapContainer, TileLayer, LayersControl, Marker, Popup } from 'react-leaflet';
import pin from "../assets/icons/arrow.png"

const { BaseLayer } = LayersControl;
// const styles = { height: '93vh', width: '100%' }

const StyledPop = styled(Popup)`
    .leaflet-popup-content-wrapper {
        border-radius: 20px;
        
    }
    .leaflet-popup-content {
        margin: 0;
    }
    .leaflet-popup-tip-container {
        visibility: hidden;
      }
    .leaflet-popup-close-button {
        display: none;
    }
`;

function GetIcon() {
    return L.icon({
      iconUrl: pin,
      iconSize: 60,
      iconAnchor: [30, 60]
    });
  }

class Map extends Component {
    state = {
        locations: [
            {key: 1, position: [45.4380, 12.3359], name: 'Venice'},
            {key: 2, position: [49.0750, -125.7654], name: 'Tofino'},
            {key: 3, position: [60.1553, -1.1430], name: 'Lerwick'},
            {key: 4, position: [71.1132, 25.8270], name: 'Skarsvag'},
            {key: 5, position: [-33.8523, 151.2108], name: 'Sydney'},
            {key: 6, position: [-22.9068, -43.1729], name: 'Rio'},
            {key: 7, position: [9.5120, 100.0136], name: 'Koh Samui'},
            {key: 8, position: [42.3675, -71.0711], name: 'Boston'},
            {key: 9, position: [-56.553447, -8.830393], name: 'Earth'}
        ]
    }

    render () {
        return (
        <div>
            <MapContainer  
                center={[22.282040, 114.143290]} 
                zoom={2} 
                scrollWheelZoom={true} 
                inertia={true}
                style={{ height: '93vh', width: '100%' }}
                minZoom={2}
                maxZoom={5}
                // worldCopyJump={true}
                maxBounds={[
                    [-90,-180], [90,180]
                ]}
                wrapX={false}
                continuousWorld={false}
                // noWrap={true}
                >
                <LayersControl>
                    <BaseLayer checked name="Stamen Watercolour">
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
                        />
                    </BaseLayer>
                    <BaseLayer name="Black & White">
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                        />
                    </BaseLayer>
                    {/* <BaseLayer name="NASA Blue Marble">
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
                        />
                    </BaseLayer> */}
                    
                </LayersControl>
                {this.state.locations.map(({key, position, name}) => 
                    <Marker icon={GetIcon()} key={key} position={position}> 
                    {/* <Marker key={key} position={position}>  */}
                        <StyledPop>
                            <button class='popup-button' onClick={this.props.action.bind(this, {name})}>Visit {name}!</button>
                        </StyledPop>
                    </Marker>
                )}
            </MapContainer>
        </div>
        );
    }   
}

export default Map;