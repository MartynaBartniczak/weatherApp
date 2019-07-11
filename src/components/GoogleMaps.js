 /*global google*/
import React, { Component } from 'React'

export class GoogleMaps extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 10,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })

    }
    render() {
        return (
            <div ref='map' />
        )
    }
}

export default GoogleMaps