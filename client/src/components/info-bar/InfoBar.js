import React from 'react';
import { Sidebar, Segment, Container, Grid, Header, List } from 'semantic-ui-react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const InfoBar = ({ animation, direction, visible }) => (
    <Sidebar
        as={Segment}
        className={styles.infoBar}
        animation={animation}
        direction={direction}
        visible={visible}
    >
        <Container>
            <Grid
                stackable
            >
                <Grid.Column width={3} />
                <Grid.Column 
                    width={5}
                >
                    <Header 
                        as='h4' 
                        content='Contacts' 
                    />
                    <List>
                        <List.Item icon='user' content='Kirill Kopitsa' />
                        <List.Item icon='marker' content='Dnipro, Ukraine' />
                        <List.Item
                            icon='mail'
                            content={<a href='mailto:joseff.knecht@gmail.com'>joseff.knecht@gmail.com</a>}
                        />
                        <List.Item
                            icon='github'
                            content={<a href='https://github.com/joseffone'>github.com/joseffone</a>}
                        />
                    </List>
                </Grid.Column>
                <Grid.Column 
                    width={5}
                >
                    <Header 
                        as='h4' 
                        content='About project'
                    />
                        <p>This site is a solution of the test task from InCode Group.</p>
                </Grid.Column>
                <Grid.Column width={3} />
            </Grid>
        </Container>
    </Sidebar>
);

InfoBar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool
};

export default InfoBar;