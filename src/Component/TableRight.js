import React, { Component } from 'react';

class TableRight extends Component {
    render() {
        return (
            <div className="table_place right">
            <div className="table_monster" style={{width: '123px'}}>
              <div className="picture_table" style={{top: '75px'}}>
                <div className="inner cycle_6_big big" style={{transform: 'scale(0.5, 0.5) rotate(0deg)', margin: '-90px'}} />
              </div>
            </div>
          </div>
        );
    }
}

export default TableRight;