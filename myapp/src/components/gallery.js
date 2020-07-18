import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import ALOGO from './pictures/alogo.png'
import DB11 from './pictures/db11.png'
import DBS12 from './pictures/dbs12.png'
import VANTAGE from './pictures/vantage.png'
import BLOGO from './pictures/blogo.png'
import I8 from './pictures/i8.png'
import M4 from './pictures/m4.png'
import X6M from './pictures/x6.png'
import FLOGO from './pictures/flogo.png'
import F12 from './pictures/f12.png'
import F488 from './pictures/488.png'
import LAFERRARI from './pictures/laFerrari.png'
import LLOGO from './pictures/llogo.png'
import SVJ from './pictures/svj.png'
import HURACAN from './pictures/huracan.png'
import ROADSTER from './pictures/roadster.png'
import MLOGO from './pictures/mlogo.png'
import M650S from './pictures/650S.png'
import M675 from './pictures/M675.png'
import M570 from './pictures/M570.png'
import PLOGO from './pictures/plogo.png'
import T718 from './pictures/718.png'
import T911 from './pictures/911.png'
import CAYMAN from './pictures/cayman.png'

import Midnight from './pictures/midnight.jpg'


class Gallery extends Component{

  constructor(props){
    super(props);
    this.state = {activeTab: 0};
  }
  selectCars(){

    if (this.state.activeTab === 0){
      return(
<React.Fragment>


        <center><img
          src={ALOGO}
          alt="Aston Martin Logo"
          style={{height:'200px'}}/></center>

        <div className="car-card">
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${DB11}) center / cover`}}>Aston Martin DB11</CardTitle>
          <CardText>
          Price: $249 / day<br/>
          Engine: V-12 <br/>
          Year: 2020 <br/>
          Transmission: Manual <br/>
          Horse Power: 630hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>


        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${DBS12}) center / cover`}}>Aston Martin DBS12</CardTitle>
          <CardText>
          Price: $280 / day<br/>
          Engine: V-12 <br/>
          Year: 2012 <br/>
          Transmission: Manual <br/>
          Horse Power: 517hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>


        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${VANTAGE}) center / cover`}}>Aston Martin Vantage</CardTitle>
          <CardText>
          Price: $139 / day<br/>
          Engine: V-8 <br/>
          Year: 2015 <br/>
          Transmission: Manual <br/>
          Horse Power: 420hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>

        <br/><br/><br/><br/><br/><br/>
        <center><div> <button class="bookingButtons subscribe btn btn-outline-dark btn-block"  size="lg" block><Link to="/book" > BOOK NOW! </Link></button></div></center><br/><br/>
</React.Fragment>
      )
    }
    else if (this.state.activeTab === 1){
      return(
<React.Fragment>

        <center><img
          src={BLOGO}
          alt="BMW Logo"
          style={{height:'200px'}}/></center>

        <div className="car-card">
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${I8}) center / cover`}}>BMW I8</CardTitle>
          <CardText>
          Price: $169 / day<br/>
          Engine: Electric <br/>
          Year: 2020 <br/>
          Transmission: Automatic <br/>
          Horse Power: 369hp<br/>
          </CardText>

          

          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>


        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${M4}) center / cover`}}>BMW M4</CardTitle>
          <CardText>
          Price: $90 / day<br/>
          Engine: V-6 <br/>
          Year: 2020 <br/>
          Transmission: Manual <br/>
          Horse Power: 425hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>


        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${X6M}) center / cover`}}>BMW X6M</CardTitle>
          <CardText>
          Price: $128 / day<br/>
          Engine: V-8 <br/>
          Year: 2020 <br/>
          Transmission: Automatic <br/>
          Horse Power: 617hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>

        <br/><br/><br/><br/><br/><br/>
        <center><div> <button class="bookingButtons subscribe btn btn-outline-dark btn-block"  size="lg" block><Link to="/book" > BOOK NOW! </Link></button></div></center> <br/><br/>
</React.Fragment>
      )
    }
    else if (this.state.activeTab === 2){
      return(
<React.Fragment>

        <center><img
          src={FLOGO}
          alt="Ferrari Logo"
          style={{height:'200px'}}/></center>

        <div className="car-card">
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${F12}) center / cover`}}>Ferrari F12</CardTitle>
          <CardText>
          Price: $380 / day<br/>
          Engine: V-12 <br/>
          Year: 2017 <br/>
          Transmission: Automatic <br/>
          Horse Power: 740hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>


        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${F488}) center / cover`}}>Ferrari 488</CardTitle>
          <CardText>
          Price: $410 / day<br/>
          Engine: V-8 <br/>
          Year: 2019 <br/>
          Transmission: Automatic <br/>
          Horse Power: 660hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>


        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${LAFERRARI}) center / cover`}}>LaFerrari </CardTitle>
          <CardText>
          Price: $1400 / day<br/>
          Engine: V-12 <br/>
          Year: 2016 <br/>
          Transmission: Automatic <br/>
          Horse Power: 949hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>

        <br/><br/><br/><br/><br/><br/>
        <center><div> <button class="bookingButtons subscribe btn btn-outline-dark btn-block"  size="lg" block><Link to="/book" > BOOK NOW! </Link></button></div></center><br/><br/>
</React.Fragment>
      )
    }
    else if (this.state.activeTab === 3){
      return(
<React.Fragment>

        <center><img
          src={LLOGO}
          alt="Lamborghini Logo"
          style={{height:'200px'}}/></center>

        <div className="car-card">
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${SVJ}) center / cover`}}>Lamborghini Aventador SVJ</CardTitle>
          <CardText>
          Price: $515 / day<br/>
          Engine: V-12 <br/>
          Year: 2020 <br/>
          Transmission: Automatic <br/>
          Horse Power: 770hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${HURACAN}) center / cover`}}>Lamborghini Huracan</CardTitle>
          <CardText>
          Price: $223 / day<br/>
          Engine: V-10 <br/>
          Year: 2020 <br/>
          Transmission: Automatic <br/>
          Horse Power: 602hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${ROADSTER}) center / cover`}}>Lamborghini Roadster SV</CardTitle>
          <CardText>
          Price: $530 / day<br/>
          Engine: V-12 <br/>
          Year: 2020 <br/>
          Transmission: Automatic <br/>
          Horse Power: 750hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>

        <br/><br/><br/><br/><br/><br/>
        <center><div> <button class="bookingButtons subscribe btn btn-outline-dark btn-block"  size="lg" block><Link to="/book" > BOOK NOW! </Link></button></div></center><br/><br/>
</React.Fragment>
      )
    }
    else if (this.state.activeTab === 4){
      return(
<React.Fragment>

        <center><img
          src={MLOGO}
          alt="McLaren Logo"
          style={{height:'200px'}}/></center>

        <div className="car-card">
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${M650S}) center / cover`}}>McLaren 650S GT</CardTitle>
          <CardText>
          Price: $400 / day<br/>
          Engine: V-8 <br/>
          Year: 2016 <br/>
          Transmission: Automatic <br/>
          Horse Power: 650hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${M675}) center / cover`}}>McLaren 675LT Spider</CardTitle>
          <CardText>
          Price: $388 / day<br/>
          Engine: V-8 <br/>
          Year: 2016 <br/>
          Transmission: Automatic <br/>
          Horse Power: 765hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${M570}) center / cover`}}>Mclaren 570s</CardTitle>
          <CardText>
          Price: $230 / day<br/>
          Engine: V-8 <br/>
          Year: 2020 <br/>
          Transmission: Automatic <br/>
          Horse Power: 562hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>

        <br/><br/><br/><br/><br/><br/>
        <center><div> <button class="bookingButtons subscribe btn btn-outline-dark btn-block"  size="lg" block><Link to="/book" > BOOK NOW! </Link></button></div></center><br/><br/>
</React.Fragment>
      )
    }
    else if (this.state.activeTab === 5){
      return(
<React.Fragment>

        <center><img
          src={PLOGO}
          alt="Porsche Logo"
          style={{height:'200px'}}/></center>

        <div className="car-card">
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${T718}) center / cover`}}>Porsche 718 Boxster S</CardTitle>
          <CardText>
          Price: $90 / day<br/>
          Engine: V-4 <br/>
          Year: 2020 <br/>
          Transmission: Manual <br/>
          Horse Power: 350hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>


        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${T911}) center / cover`}}>Porsche 911 Turbo</CardTitle>
          <CardText>
          Price: $152 / day<br/>
          Engine: V-6 <br/>
          Year: 2020 <br/>
          Transmission: Manual <br/>
          Horse Power: 650hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>


        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color:'#feac5e', height:'176px', background:`url(${CAYMAN}) center / cover`}}>Porsche Cayman GT4</CardTitle>
          <CardText>
          Price: $114 / day<br/>
          Engine: V-6 <br/>
          Year: 2020 <br/>
          Transmission: Manual <br/>
          Horse Power: 414hp<br/>
          </CardText>



          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        </div>
        <br/><br/><br/><br/><br/><br/>
        <center><div> <button class="bookingButtons subscribe btn btn-outline-dark btn-block"  size="lg" block><Link to="/book" > BOOK NOW! </Link></button></div></center><br/><br/>

</React.Fragment>
      )
    }
 }

render(){
  return(
    <div className="car-tabs">
      <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
        <Tab>Aston Martin</Tab>
        <Tab>BMW</Tab>
        <Tab>Ferrari</Tab>
        <Tab>Lamborghini</Tab>
        <Tab>McLaren</Tab>
        <Tab>Porsche</Tab>
      </Tabs>


        <Grid >
          <Cell col={12}>
          </Cell>
        </Grid>
        <div className="content">{this.selectCars()}</div>

    </div>

  )
}
}

export default Gallery;
