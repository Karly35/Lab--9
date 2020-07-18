import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

import Midnight from './pictures/midnight.jpg'
import Supercars from './pictures/supercars.png'
class Home extends Component{

  render(){
    return(
      <React.Fragment>

      <div style={{ backgroundImage:`url(${Midnight})`,backgroundHeight:'500px', backgroundWidth:'500px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>  </div>

      <div style={{width:'100', margin:'auto'}}>
        <Grid className="homepage-grid">
          <Cell col={12}>

          <div className="homepage-text">
           <h1> Welcome to Luxurious Rides </h1><hr />
           

           </div>

            <img
              src={Supercars}
              alt= "Supercars"
              className="supercars-img"/>


          </Cell>
        </Grid>
      </div>

      </React.Fragment>
    )

  }
}

export default Home;
