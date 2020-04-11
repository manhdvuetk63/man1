import React, { Component } from 'react';

class ElephantLeft extends Component {
    render() {
        return (
            <div className="monster_holder left active">
            <div className="monster orange active">
              <div className="mouth" />
            </div>
            <div className="monster orange red" style={{opacity: 0}} />
            <div className="monster orange sleep" style={{opacity: 0}} />
            <div className="monster nose orange" />
            <div className="grid_monster">
              <div className="figure without_transform_transition" style={{left: '150px', top: '176px'}} id="sprite_10">
                <div className="inner square_5" style={{transform: 'rotate(261.457deg)'}} id="sprite_24" />
              </div>
            </div>
          </div>
        );
    }
}

export default ElephantLeft;