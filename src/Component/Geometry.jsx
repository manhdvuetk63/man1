import React, { Component } from 'react';

class Geometry extends Component {
    props
    render() {
        return (
            <div className="figure openhand" style={this.props.style_geo} id={this.props.id_geo}>
                <div className={this.props.class_geoinner} style={this.props.style_geoinner} />
              </div>
        );
    }
}

export default Geometry;