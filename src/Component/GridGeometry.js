import React, { Component } from 'react';
import GeoMetry from './Geometry';
class GridGeometry extends Component {
    render() {
        return (
            <div>
            <div classname="grid_place">
              <GeoMetry style_geo={{left: '400px', top: '0px'}} id_geo="sprite_9" style_geoinner={{transform: 'rotate(0deg) scale(1, 1)'}} class_geoinner="inner cycle_5"  ></GeoMetry>
              <GeoMetry style_geo={{left: '330px', top: '100px'}} id_geo="sprite_11" style_geoinner={{transform: 'rotate(0deg) scale(1, 1)'}} class_geoinner="inner square_3"  ></GeoMetry>
              <GeoMetry style_geo={{left: '440px', top: '90px'}} id_geo="sprite_13" style_geoinner={{transform: 'rotate(0deg) scale(1, 1)'}} class_geoinner="inner triangle_4"  ></GeoMetry>
              <GeoMetry style_geo={{left: '530px', top: '100px'}} id_geo="sprite_14" style_geoinner={{transform: 'rotate(0deg) scale(1, 1)'}} class_geoinner="inner hexagon_3"  ></GeoMetry>
              <GeoMetry style_geo={{left: '340px', top: '210px'}} id_geo="sprite_12" style_geoinner={{transform: 'rotate(0deg) scale(1, 1)'}} class_geoinner="inner rectangle_7"  ></GeoMetry>
              <GeoMetry style_geo={{left: '450px', top: '200px'}} id_geo="sprite_15" style_geoinner={{transform: 'rotate(0deg) scale(1, 1)'}} class_geoinner="inner cycle_1"  ></GeoMetry>
              
            
              <GeoMetry className="figure openhand" style_geo={{left: '540px', top: '190px'}} id_geo="sprite_16" 
              class_geoinner="inner square_4" style_geoinner={{transform: 'rotate(0deg) scale(1, 1)'}}></GeoMetry>
              <GeoMetry className="figure openhand" style_geo={{left: '350px', top: '300px'}} id_geo="sprite_17"
                 class_geoinner="inner cycle_3" style_geoinne={{transform: 'rotate(0deg) scale(1, 1)'}} >
              </GeoMetry>
              <GeoMetry className="figure openhand" style_geo={{left: '440px', top: '290px'}} id_geo="sprite_18"
                 class_geoinner="inner triangle_3" style_geoinne={{transform: 'rotate(0deg) scale(1, 1)'}}>
              </GeoMetry>
              <GeoMetry className="figure openhand" style_geo={{left: '550px', top: '300px'}} id_geo="sprite_19"
               class_geoinner="inner square_1" style_geoinne={{transform: 'rotate(0deg) scale(1, 1)'}} >
              </GeoMetry>
              <GeoMetry className="figure openhand" style_geo={{left: '340px', top: '390px'}} id_geo="sprite_20"
               class_geoinner="inner cycle_4" style_geoinne={{transform: 'rotate(0deg) scale(1, 1)'}} >
              </GeoMetry>
              <GeoMetry className="figure openhand" style_geo={{left: '450px', top: '400px'}} id_geo="sprite_21"
                class_geoinner="inner square_2" style_geoinne={{transform: 'rotate(0deg) scale(1, 1)'}} >
              </GeoMetry>
              <GeoMetry className="figure openhand" style_geo={{left: '540px', top: '390px'}} id_geo="sprite_22"
                 class_geoinner="inner hexagon_4" style_geoinne={{transform: 'rotate(0deg) scale(1, 1)'}} >
              </GeoMetry>
            </div>
          </div>
        );
    }
}

export default GridGeometry;