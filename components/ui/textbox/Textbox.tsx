import * as React from 'react';

/**
 * @render react
 * @name Textbox
 * @description A textbox control
 * @example
 * <Textbox label="I am a textbox" placeholder="Enter text" />
 */

export interface TextboxProps {
    label:string,
    placeholder?: string
}

export interface TextboxState {
}

export default class Textbox extends React.Component<TextboxProps, TextboxState> {
  constructor(props: TextboxProps) {
    super(props);

        this.state = {
        }
  }

  render() {
    let {label, placeholder} = this.props;
    return (
      <div>
        <div className="label">{label}</div>
        <input placeholder={placeholder||""} />
      </div>
    );
  }
}
