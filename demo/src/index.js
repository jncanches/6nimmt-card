import React, {Component} from 'react'
import {render} from 'react-dom'

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

        const pageStyle = {
            width: '100%',
            padding: '20px'
        };

        const selectorStyle = {
            position: 'absolute',
            width: '200px',
            padding: '20px'
        }

        const cardContainerStyle = {
            position: 'relative',
            width: this.state.containerWidth + 'px',
            margin: 'auto',
            marginBottom: '33%'
        }

        return (
            <div style={pageStyle}>
                <div style={selectorStyle}>
                    Face value :
                    <input type="range" min={1} max={104} value={this.state.faceValue} onChange={this._setFaceValueState}/>

                    Container's width :
                    <input type="range" min={200} max={600} value={this.state.containerWidth} onChange={this._setContainerWidthState}/>
                </div>
                <div style={cardContainerStyle}>
                    <Card faceValue={this.state.faceValue}/>
                </div>
            </div>
        );
    }
}

render(<Demo/>, document.querySelector('#demo'))
