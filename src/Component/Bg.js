import React, { Component } from 'react';
import GameBox from './GameBox'
import HeadBox from './HeadBox'
class Bg extends Component {
    render() {
        return (
            <div className="bg">
               <div className="boxgame">
                   <HeadBox></HeadBox>
                   <GameBox></GameBox>
                </div>
            </div>
        );
    }
}

export default Bg;