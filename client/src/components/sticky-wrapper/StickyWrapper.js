import React, { createRef } from 'react';
import { Sticky, Segment } from 'semantic-ui-react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const StickyWrapper = ({ children, stickyIndex }) => {
    let contextRef = createRef();
    const content = [].concat(children);
    const contentUp = content.slice(0, stickyIndex);
    const stickyContent = content[stickyIndex];
    const contentDown = content.slice(stickyIndex + 1, content.length);
    return (
        <Segment 
            data-testid='sticky-wrapper'
            basic
            className={styles.stickyWrapper}
        >
            <div ref={contextRef}>
                {contentUp.length > 0 ? <Segment basic>{contentUp}</Segment> : null}
                <Sticky 
                    data-testid='sticky-wrapper-fragment'
                    context={contextRef}
                >
                    <Segment basic>{stickyContent}</Segment>
                </Sticky>
                {contentDown.length > 0 ? <Segment basic>{contentDown}</Segment> : null}
            </div>
        </Segment>
    );
};

StickyWrapper.defaultProps = {
    stickyIndex: 0
};

StickyWrapper.propTypes = {
    stickyIndex: PropTypes.number,
    children: PropTypes.node
};

export default StickyWrapper;