import React,{ Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, DropdownButton, Dropdown} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render (){
    return(

    <div className="demo-big-content">
      <Layout>
      <Header className="header-color" title="Luxurious Rides" scroll>
        <Navigation>
            <Link to="/homepage">Home</Link>
            <Link to="/gallery">Browse</Link>
            <Link to="/book">Book Now</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="#">Lang</Link>


        </Navigation>
        </Header>
      <Drawer title="Luxurious Rides">
        <Navigation>
          <Link to="/homepage">Home</Link>
          <Link to="/gallery">Browse</Link>
          <Link to="/book">Book Now</Link>
          <Link to="/contact">Contact Us</Link>

        </Navigation>
      </Drawer>
    <Content>
        <div className="page-content" />
        <Main/>
    </Content>
    </Layout>
</div>
  );
 }
}

export default App;
