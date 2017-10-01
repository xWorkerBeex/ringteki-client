import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

import Counter from './Counter.jsx';
import FateCounter from './FateCounter.jsx';

class CardCounters extends React.Component {
    render() {
        if(_.size(this.props.counters) === 0) {
            return null;
        }

        var countersClass = 'counters ignore-mouse-events';

        var counterDivs = _.map(this.props.counters, (counter, key) => {
            if(key === 'card-fate') {
                return (<FateCounter key={ key } 
                    name={ key } 
                    value={ counter.count } 
                    fade={ counter.fade } 
                    cancel={ counter.cancel } 
                    shortName={ counter.shortName } />);
            }

            return (<Counter key={ key } 
                name={ key } 
                value={ counter.count } 
                fade={ counter.fade } 
                cancel={ counter.cancel } 
                shortName={ counter.shortName } />);
        });

        if(_.size(this.props.counters) > 3) {
            countersClass += ' many-counters';
        }

        return (
            <div className={ countersClass }>
                { counterDivs }
            </div>
        );
    }
}

CardCounters.displayName = 'CardCounters';
CardCounters.propTypes = {
    counters: PropTypes.object.isRequired
};

export default CardCounters;
