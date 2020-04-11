import React, { Component } from 'react';

class LifeStatus extends Component {
    render() {
        return (
            <div className="lives_place">
            <div className="life life_3" style={{left: '0px'}} />
            <div className="life life_3" style={{left: '60px'}} />
            <div className="life life_3" style={{left: '120px'}} />
          </div>
        );
    }
}

export default LifeStatus;