import React, { createRef } from 'react';
import { Sticky, Segment } from 'semantic-ui-react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const StickyWrapper = ({ children }) => {
    let contextRef = createRef();
    const content = [].concat(children);
    return (
        <Segment 
            basic
            className={styles.stickyWrapper}
        >
            <div ref={contextRef}>
                <Sticky 
                    context={contextRef}
                >
                    <Segment basic>{content[0]}</Segment>
                </Sticky>
                <Segment basic>{content[1]}</Segment>
            </div>
        </Segment>
    );
};

StickyWrapper.propTypes = {
    children: PropTypes.node
};

export default StickyWrapper;