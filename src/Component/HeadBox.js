import React, { Component } from 'react';

class HeadBox extends Component {
    render() {
        return (
    <div className="head-box">
        <a className="back-link" style={{}} href="#">
          <i className="fas fa-chevron-left fa-2x arrow-left" />
          <span>Back</span>
        </a>
        <div className="beads-wrapper">
          <div id="progress">
            <div className="inner_progress"><i className="az_ball_0" id="bead0" style={{left: '4px'}} /><i className="az_ball_1" id="bead1" style={{left: '28px'}} /><i className="az_ball_2" id="bead2" style={{left: '52px'}} /></div>
          </div>
        </div>
      </div>
        );
    }
}

export default HeadBox;