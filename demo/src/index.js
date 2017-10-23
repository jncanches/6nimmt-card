import React, {Component} from 'react'
import {render} from 'react-dom'

import styles from './style.css'

import Card from '../../src'

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faceValue: 1,
            containerWidth: 300
        };

        this._setFaceValueState = this._setFaceValueState.bind(this);
        this._setContainerWidthState = this._setContainerWidthState.bind(this);
    }

    _setFaceValueState(event) {
        this.setState({faceValue: event.target.valueAsNumber});
    }

    _setContainerWidthState(event) {
        this.setState({containerWidth: event.target.valueAsNumber});
    }

    render() {
        const cardContainerStyle = {
            width: this.state.containerWidth + 'px',
        }

        return (
            <div className="demo-page">
                <h1>6 Nimmt card component</h1>
                <div className="selectors">
                    <div className="selector-label">Face value :</div>
                    <input type="range" min={1} max={104} value={this.state.faceValue} onChange={this._setFaceValueState}/>
                    <br/>
                    <div className="selector-label">Container's width :</div>
                    <input type="range" min={200} max={600} value={this.state.containerWidth} onChange={this._setContainerWidthState}/>
                </div>
                <div className="card-container" style={cardContainerStyle}>
                    <Card faceValue={this.state.faceValue}/>
                </div>
            </div>
        );
    }
}

render(<Demo/>, document.querySelector('#demo'))
