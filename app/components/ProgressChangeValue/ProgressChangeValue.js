import React, {PureComponent} from 'react';


class ProgressChangeValue extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isUpPrice: true
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({isUpPrice: +nextProps.price > +this.props.price});
    }

    render() {
        const {isUpPrice} = this.state;

        return (
            <p style={{color: isUpPrice ? '#3f8600' : '#cf1322'}}>
                <svg viewBox="64 64 896 896"
                     focusable="false"
                     width="1em" height="1em"
                     fill="currentColor"
                     aria-hidden="true"
                    style={{marginBottom: -4, transform: isUpPrice ? 'rotate(180deg)' : ''}}>
                    <path
                        d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"></path>
                </svg>
                <span >{this.props.price}</span>
            </p>
        );
    }
}

export default ProgressChangeValue;
