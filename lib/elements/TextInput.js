import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Colors from '../styles/colors';
import * as Fonts from '../typography/fonts';

const TextInputContainer = styled.input`
    font-family: ${Fonts.primary};
    display: block;
    background: ${({ bgColor }) => bgColor};
    color: ${({ fontColor }) => fontColor};
    margin: 10px;
    box-shadow: 0 1px 1px 0;
    font-size: 14px;
    height: 37px;
    padding-left: 15px;
    padding-right: 15px;
    border-style: none;
`;

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.initialValue,
        };
    }
    _onChange = (evt) => {
        this.setState({
            value: evt.currentTarget.value,
        });
        this.props.onChange(evt);
    }
    render() {
        return (
            <TextInputContainer
                bgColor={this.props.bgColor}
                fontColor={this.props.fontColor}
                type="text"
                value={this.state.value}
                placeholder={this.props.placeholder}
                onChange={this._onChange}
            />
        );
    }
}

TextInput.defaultProps = {
    initialValue: '',
    placeholder: 'Placeholder',
    bgColor: Colors.white1,
    fontColor: Colors.sharkGrey1,
    onChange: ((evt) => { console.log(evt); }),
};

TextInput.propTypes = {
    initialValue: PropTypes.string,
    placeholder: PropTypes.string,
    bgColor: PropTypes.string,
    fontColor: PropTypes.string,
    onChange: PropTypes.func,
};

export default TextInput;
