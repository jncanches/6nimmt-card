import React, {Component} from 'react'
import styles from './styles.scss';
import fontStyle from './assets/fonts/6nimmt/style.scss';
import bullWeight1 from './assets/images/bull-weight-1.svg';
import bullWeight2 from './assets/images/bull-weight-2.svg';
import bullWeight3 from './assets/images/bull-weight-3.svg';
import bullWeight5 from './assets/images/bull-weight-5.svg';
import bullWeight7 from './assets/images/bull-weight-7.svg';
import classnames from 'classnames';

import Utils from '6nimmt-utils';

export default class extends Component {
    render() {
        let weight = this.getWeightFromFaceValue(this.props.faceValue);

        let cardClass = classnames('card', {
            'weight-1': weight === 1,
            'weight-2': weight === 2,
            'weight-3': weight === 3,
            'weight-5': weight === 5,
            'weight-7': weight === 7
        });

        const divStyle = {
        };

        const weightHeadersIcons = [];
        for (var i=0; i<weight; i++) {
            weightHeadersIcons.push(<i className='icon-bull' key={i}></i>);
            if ((i===3 && weight===7) || (i===2 && weight===5) || (i===1 && weight===3)) {
                weightHeadersIcons.push(<br key={'br' + i}/>);
            }
        }

        const bullIconsByWeight = {
            1: bullWeight1,
            2: bullWeight2,
            3: bullWeight3,
            5: bullWeight5,
            7: bullWeight7,
        };
        const bullIconUrl = './assets/images/bull-weight-' + weight + '.svg';

        var faceValueAsString = this.props.faceValue;
        if (this.props.faceValue === 66 || this.props.faceValue === 99) {
            faceValueAsString += '.';
        }

        return (
            <div className={cardClass} style={divStyle}>
                <div className="header">
                    <label className="face-value-left">{faceValueAsString}</label>
                    <div className="score-zone">
                        {weightHeadersIcons}
                    </div>
                    <label className="face-value-right">{faceValueAsString}</label>
                </div>
                <img className="center-bull-icon" src={bullIconsByWeight[weight]}/>
                {/*<i className="icon-bull"/>*/}
                <label className="face-value">{faceValueAsString}</label>
                <div className="footer">
                    <label className="face-value-left">{faceValueAsString}</label>
                    <div className="score-zone">{weightHeadersIcons}</div>
                    <label className="face-value-right">{faceValueAsString}</label>
                </div>
            </div>
        );
    }

    getWeightFromFaceValue(faceValue) {
        return Utils.getWeightFromFaceValue(faceValue);
    }
}
