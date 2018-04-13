import * as React from 'react';
import * as s from './Button.css';
import {default as MUIButton} from 'material-ui/Button';
import SvgIcon from 'material-ui/SvgIcon';

/**
 * @render react
 * @name Button
 * @description A really cool button
 * @example
 * <Button>Click Me!</Button>
 */

interface ButtonProps {
    onClick?: () => void,
    children?: any
}

interface ButtonState {
    ripple:any
}

function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
        left: el.left + window.scrollX,
        top: el.top + window.scrollY
    }
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
        ripple: {
            active: false,
            left: 0,
            top: 0,
            width: 0,
            height: 0
        }
    }
  }

    onClick = (event) => {
        this.setState({ripple:{active:false, top:0, left:0, width:0, height:0}});

        var posX = event.nativeEvent.offsetX,
            posY = event.nativeEvent.offsetY,
            buttonWidth = '120px',
            buttonHeight = '50px'

        if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        this.setState({ripple:{active:true, top:posY, left:posX, width:buttonWidth, height:buttonHeight}});

        //this.props.onClick();
    }

    render() {
        let {ripple} = this.state;
        return (
            <div>

            </div>
        );
    }
}
