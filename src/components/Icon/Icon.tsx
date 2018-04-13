import * as React from 'react';
import * as css from './Icon.css';
import { Icons } from './Icon.fn';

/**
 * @render react
 * @name Icon
 * @description Easy to use SVG Icons
 * @example
 * <Icon icon="sync-regular"></Icon>
 * <Icon icon={{
                    svgCode: 'M457.373 9.387l-50.095 50.102C365.411 27.211 312.953 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h10.015c6.352 0 11.647-4.949 11.977-11.293C48.159 131.913 141.389 42 256 42c47.554 0 91.487 15.512 127.02 41.75l-53.615 53.622c-20.1 20.1-5.855 54.628 22.627 54.628H480c17.673 0 32-14.327 32-32V32.015c0-28.475-34.564-42.691-54.627-22.628zM480 160H352L480 32v128zm11.699 96h-10.014c-6.353 0-11.647 4.949-11.977 11.293C463.84 380.203 370.504 470 256 470c-47.525 0-91.468-15.509-127.016-41.757l53.612-53.616c20.099-20.1 5.855-54.627-22.627-54.627H32c-17.673 0-32 14.327-32 32v127.978c0 28.614 34.615 42.641 54.627 22.627l50.092-50.096C146.587 484.788 199.046 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507zM32 480V352h128L32 480z',
                    viewBox: '0 0 512 512'
                }} 
    />
 */

export enum IconTypes {
    plus = 'plus',
    spinner = 'spinner',
    cog = 'cog',
    editLight = 'edit-light',
    pencilLight = 'pencil-light',
    pencilRegular = 'pencil-regular',
    pencilSolid = 'pencil-solid',
    syncLight = 'sync-light',
    syncRegular = 'sync-regular',
    syncSolid = 'sync-solid'
}



export interface IIconStyles {
    root?: {

    }
}

export interface IconProps {
    icon: string|{svgCode:string, viewBox:string},
    rotate?: boolean,
    styles?: IIconStyles
}

export interface IconState {
}

export default class Icon extends React.Component<IconProps, IconState> {
    constructor(props: IconProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        let { icon } = this.props;
        let defaultStyles:IIconStyles = {
            root: {
                height:30,
                width:'auto',
                strokeWidth: 3
            }
        }

        let oSvg = (typeof icon === 'string') ? Icons[icon] : icon;

        let styles = Object.assign({}, defaultStyles, this.props.styles);
        let rotate = this.props.rotate ? css.rotate : '';
        return (
            <svg className={rotate} style={styles.root} xmlns="http://www.w3.org/2000/svg" viewBox={oSvg.viewBox}>
                <path d={oSvg.svgCode}/>
            </svg>
        );
    }
}
