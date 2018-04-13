import * as React from 'react';

export interface LinkProps {
    url: string,
    text: string
}

export interface LinkState {
    hovering: boolean
}

export default class Link extends React.Component<LinkProps, LinkState> {
  constructor(props: LinkProps) {
    super(props);

        this.state = {
            hovering: false
        }
  }

  render() {

    const styles = {
        link: {
            fontSize: '1em',
            textDecoration: 'none',
            position: 'relative' as 'relative',
            fontFamily: 'Arial',
            padding: '3px',
            color: '#4183C4'
        }
    }
    
    let { url, text } = this.props;

    return (
      <a style={{...styles.link}} href={url}>
        {text}
      </a>
    );
  }
}
