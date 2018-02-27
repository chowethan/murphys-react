import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image, Dropdown, Icon, Grid, List } from 'semantic-ui-react';

class Footer extends React.Component {

  render() {
    return (
        <div className="footer-background">
          <Grid container={true} columns={3}>
            <Grid.Column>
              Lunch
              <hr />
              <List>
                <List.Item>Monday – Friday: 11:00am – 2:30pm</List.Item>
                <List.Item>Saturday – Sunday: Not open for lunch</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Bar
              <hr />
              <List>
                <List.Item>Monday- Friday from 11:00am</List.Item>
                <List.Item>Saturday- Sunday from 4:00pm</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Dinner
              <hr />
              <List>
                <List.Item>Monday – Saturday: 5:30pm – 10:00pm</List.Item>
                <List.Item>Sunday: 5:00pm – 9:00pm</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

class Background extends React.Component {

  render() {
    return (
        <div className='murphys-background'>
          <Grid container={true} verticalAlign={'middle'} style={{height: '500px'}}>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png' />
              </Grid.Column>
              <Grid.Column>
                <Header size={'medium'} style={{color: 'white'}}>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy's has been a haven for mariners, businessmen and locals since 1891.</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

class Topmenu extends React.Component {

  render() {
    return (
        <Menu className='topmenu' borderless style={{'padding': '15px'}}>
          <Container>
            <Image item src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png' />
            <Menu.Item position={'right'} href='#'>Home</Menu.Item>
            <Dropdown item text={'About Us'}>
              <Dropdown.Menu>
                <Dropdown.Item>Getting Here/Parking</Dropdown.Item>
                <Dropdown.Item>Catering/Private Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text={'Menus'}>
              <Dropdown.Menu>
                <Dropdown.Item>Lunch Menu</Dropdown.Item>
                <Dropdown.Item>Dinner Menu</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>Bar</Menu.Item>
            <Menu.Item><Icon name='search' /></Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <Topmenu />
          <Background />
          <Footer />
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));
