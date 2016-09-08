"use strict";
const React = require('react');
const typings = require('./transmit-transparently.type');
const others_1 = require('../others/others');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (...ignore) => (Target) => {
    class Transmit extends React.Component {
        constructor(...args) {
            super(...args);
            this.state = new typings.State();
        }
        componentWillMount() {
            this.state.others = others_1.default(Target.defaultProps, this.props, ignore);
        }
        render() {
            const newProps = _.cloneDeep(this.props);
            newProps.others = this.state.others;
            return React.createElement(Target, newProps, this.props.children);
        }
    }
    Transmit.defaultProps = new typings.Props();
    const func = () => {
        return Transmit;
    };
    return func();
};
