import React, { Component } from 'react';
import ElephantLeft from './ElephantLeft';
import ElephantRight from './ElephantRight';
import GridGeometry from './GridGeometry';
import LableLeft from './LabelLeft';
import LableRight from './LableRight';
import LifeStatus from './LifeStatus';
import TableLeft from './TableLeft';
import TableRight from './TableRight';
import Title from './Title';

class GameBox extends Component {
    render() {
        return (
        <div className="game-box uchiru-place card player-1 script5848 fixed cr">
            <div className="sence">
                 <div className="monster_place">
                    <TableLeft/>
                    <TableRight/>
                    <ElephantLeft/>
                    <ElephantRight/>
                    <GridGeometry/>
                    <LableLeft/>
                    <LableRight/>
                    <Title/>
                    <LifeStatus/>
                 </div>
            </div>
        </div>
        );
    }
}

export default GameBox;