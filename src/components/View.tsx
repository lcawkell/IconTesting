import * as React from 'react';

import Button from './Button';
import Textbox from './Textbox';
import Link from './Link';
import Icon, {IconTypes, IIconStyles} from './Icon';

export interface ViewProps {
}

export interface ViewState {
    textboxValue: string
}

export default class View extends React.Component<ViewProps, ViewState> {
    constructor(props: ViewProps) {
        super(props);

        this.state = {
            textboxValue: ''
        }
    }

    onTextboxChange = (value:string) => {
        this.setState({textboxValue:value});
    }

    render() {

        return (
            <div>
                <Icon icon={IconTypes.syncRegular} rotate />
            </div>
        );
    }
}
