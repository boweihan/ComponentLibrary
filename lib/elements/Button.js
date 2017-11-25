import styled from 'styled-components';
import { darken } from 'polished';
import * as Colors from '../styles/colors';
import * as Fonts from '../typography/fonts';

const buttonSizes = {
    large: {
        'font-size': '14px',
        'font-weight': 'bold',
        'line-height': '40px',
        'border-radius': '6px',
        'min-width': '80px',
        height: '40px',
        padding: '0 16px',
    },
    medium: {
        'font-size': '14px',
        'font-weight': 'bold',
        'line-height': '40px',
        'border-radius': '6px',
        height: '32px',
        padding: '0 16px',
    },
    small: {
        'font-size': '12px',
        'font-weight': 'bold',
        'line-height': '40px',
        'border-radius': '6px',
        height: '24px',
        padding: '0 8px',
    },
};

const Button = styled.div`
    font-family: ${Fonts.primary};
    display: inline-block;
    background: ${({ bgColor }) => bgColor};
    color: ${({ fontColor }) => fontColor};
    min-width: ${({ size }) => buttonSizes[size]['min-width']};
    font-size: ${({ size }) => buttonSizes[size]['font-size']};
    line-height: ${({ size }) => buttonSizes[size]['line-height']};
    font-weight: ${({ size }) => buttonSizes[size]['font-weight']};
    border-radius: ${({ size }) => buttonSizes[size]['border-radius']};
    padding: ${({ size }) => buttonSizes[size].padding};
    cursor: pointer;
    transition: all 300ms ease;
    &:hover {
      background: ${({ bgColor }) => darken(0.1, bgColor)};
    }
    margin: 10px;
`;

Button.defaultProps = {
    bgColor: Colors.venaGreen1,
    fontColor: Colors.white1,
    size: 'medium',
};

export default Button;
