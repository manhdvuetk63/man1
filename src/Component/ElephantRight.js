import React, { Component } from 'react';

class ElephantRight extends Component {
    render() {
        return (
            <div>
                <div className="monster_holder right active">
          <div className="monster green active">
            <div className="mouth" />
          </div>
          <div className="monster green red" style={{opacity: 0}} />
          <div className="monster green sleep" style={{opacity: 0}} />
          <div className="monster nose green" />
          <div className="grid_monster" />
        </div>
            </div>
        );
    }
}

export default ElephantRight;