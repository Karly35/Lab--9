import React, {Component} from 'react';
import{Grid, Cell, List, ListItem, ListItemContent, } from 'react-mdl';
import Supercars from './pictures/supercars.png'

class Contact extends Component{

  render(){
    return(
      <div className="contact-info">
         <Grid className="contact-grid">
          <Cell col={6}>
            <h2> Luxurious Rides</h2>
              <img
                src={Supercars}
                alt="Luxurious Rides"
                style={{height:'350px'}}/>
              <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}> </p>
          </Cell>
          <Cell col={6}>
            <h2> Contact Us</h2>
            <hr/><br/><br/>

            <div >
            <List>
              <ListItem>
                <ListItemContent icon="phone">613-999-9999</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="email">luxurious.rides@world.ca</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="address">75 Laurier Ave E, Ottawa, ON K1N 6N5</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="details">Monday - Friday: 8:00 AM - 9:00 PM</ListItemContent>
              </ListItem>
            </List>

            <div id="map-container-google-2" class="z-depth-1-half map-container" style={{height:'500px'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.6965496278003!2d-75.68552467075577!3d45.42336924538764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversit%C3%A9%20d&#39;Ottawa!5e0!3m2!1sfr!2sca!4v1592160706558!5m2!1sfr!2sca" width="1100" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" frameborder="0"
            style={{border:'0', height:'200px', width:'500px'}}></iframe></div>
            </div>
          </Cell>
        </Grid>
     </div>

    )

  }
}

export default Contact;
