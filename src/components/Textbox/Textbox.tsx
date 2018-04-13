import * as React from 'react';

/**
 * @render react
 * @name Textbox
 * @description A textbox control
 * @example
 * <Textbox label="First Name" labelFixed={false} value="" onChange={this.onChange} />
 */

export interface TextboxProps {
    label:string,
    labelFixed?: boolean,
    value?:string,
    onChange?:(newValue:string) => void,
    placeholder?: string
}

export interface TextboxState {
    value:string,
    focusing: boolean
}

export default class Textbox extends React.Component<TextboxProps, TextboxState> {
  constructor(props: TextboxProps) {
    super(props);

        this.state = {
            value: '',
            focusing: false
        }
  }

  SetValue = (caller) => {
      this.setState({value: caller.target.value});
  }

  OnChange = (caller) => {
      this.props.onChange(caller.target.value);
  }

  ToggleFocusing = () => {
      let focusing = this.state.focusing;
      this.setState({focusing:!focusing});
  }

  BlurInput = () => {
    let focusing = this.state.focusing;
    this.setState({focusing: false});

  }

  render() {
    let {label, placeholder, labelFixed} = this.props;
    let {focusing} = this.state;
    let value, onChange;

    if((this.props.value !== undefined && this.props.value !== null) && (this.props.onChange !== undefined && this.props.onChange !== null)){
        value = this.props.value;
        onChange = this.OnChange;
    } else {
        value = this.state.value;
        onChange = this.SetValue;
    }

    let styles = {
        root: {
            marginTop: 20,
            background: 'transparent' as 'transparent',
            border: 'none',
            width: '100%',
            boxShadow: '0px 1px 0px #009',
            fontSize: 19,
            outline: 'none'
        },
        container: {
            fontFamily: "Arial, Helvetica, sans-serif",
            width: 300,
            position: "relative" as "relative",
            margin: '5px 0px'
        },
        label: {
            transition: 'all .2s',
            position: 'absolute' as 'absolute',
            zIndex: -1
        },
        default: {
            top: 5,
            left: 0,
            fontSize: 12
        },
        overlay: {
            top: 25,
            left: 0
        },
        inputFocus: {
            boxShadow: '0px 2px 0px #007'
        }
    }

    let labelStyles;

    if(labelFixed){
        labelStyles = {...styles.label, ...styles.default};
    } else {
        labelStyles = focusing? {...styles.label, ...styles.default} : value.length < 1 ? {...styles.label, ...styles.overlay} : {...styles.label, ...styles.default} ;
    }
    
    let inputStyles = focusing? {...styles.inputFocus} : {};

    return (
      <div style={{...styles.container}}>
        <span className="label" style={labelStyles}>{label}</span>
        <input style={{...styles.root, ...inputStyles}} value={value} onFocus={this.ToggleFocusing} onBlur={this.BlurInput} onChange={onChange}/>
      </div>
    );
  }
}
