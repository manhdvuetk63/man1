import React, { Component } from 'react';

class TableLeft extends Component {
    render() {
        return (
            <div>
                 <div className="table_place left">
          <div className="table_monster" style={{width: '135px'}}>
            <div className="picture_table" style={{top: '75px'}}>
              <div className="inner square_3_big big" style={{transform: 'scale(0.35, 0.35) rotate(0deg)', margin: '-90px'}} />
            </div>
          </div>
        </div>
            </div>
        );
    }
}

export default TableLeft;