import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ScriptTag from 'react-script-tag';


class Book extends Component{

  render(){
    return(



    <div class="container">
        <div id="accordion">

            <div class="card">
                <div class="card-header">
                	{/*<!-- Payment form inspired by Bootstrap 4 website: https://getbootstrap.com/docs/4.0/components/navs/ -->*/}

                    <nav>
  						            <div class="nav nav-tabs" id="nav-tab" role="tablist">
    						                <a class="nav-item nav-link active" id="nav-reservation-tab" data-toggle="tab" href="#nav-reservation" role="tab" aria-controls="nav-reservation" aria-selected="true">Booking Info</a>
    						                <a class="nav-item nav-link" id="nav-payment-tab" data-toggle="tab" href="#nav-payment" role="tab" aria-controls="nav-payment" aria-selected="false">Payment <img src="https://img.icons8.com/nolan/30/bank-card-back-side.png"/></a>
    					            </div>
                    </nav>

      			<div class="tab-content" id="myTabContent">
  					<div class="tab-pane fade show active" id="nav-reservation" role="tabpanel" aria-labelledby="nav-reservation-tab">

  						<div id="collapseDate" class="collapse show" data-parent="#accordion">
                    	<div class="card-body">
                        <p></p>
                      {/*  <!-- Bootstrap has various input components. Some examples are given here: -->
                        <!-- Component shown here: https://v4-alpha.getbootstrap.com/components/forms/#textual-inputs -->

                        <!--  Form inspired by Bootstrap 4 website: https://getbootstrap.com/docs/4.0/components/navs/ --> */}


                        <div class="col-7">
                        <label for="gender"><b>Please select your gender:</b></label>
                        <select id="gender">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        </div>

                        <div class="col-7">
                        <label><b>Age:</b></label><br/>
                          <input type="radio" id="age1" name="age" value="25-"/>
                            <label for="lessthan25">Less than 25</label><br/>
                          <input type="radio" id="age2" name="age" value="25+"/>
                            <label for="plus25">25+</label><br/>
                        </div>

                        <div class="col-7">
                             <label><b>Full Name:</b></label><br/>
                             <input class="form-control" type="text" id="fname" placeholder="Enter Full Name" name="fname" size="60" required /><br/>
                        </div>

                        <div class="col-7">
                            <label><b>Email address:</b></label><br/>
                            <input class="form-control" type="email" id="email" placeholder="Enter email" name="email" size="60" required /><br/>
                        </div>

                        <div class="col-7">
                            <label><b>Phone Number:</b></label><br/>
                            <input class="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input" required /><br/>
                        </div>

                        <div class="col-7">
                        <label for="gender"><b>What's the occasion?</b></label>
                        <select id="gender">
                          <option value="None">None</option>
                          <option value="Birthday">Birthday</option>
                          <option value="CarShow">CarShow</option>
                          <option value="Party">Party</option>
                          <option value="Other">Other</option>
                        </select>
                        </div>

                        <div class="col-7">
                        <br/>
                            <label><b>Please choose your Supercar:</b></label><br/>
                            <label><b>Make:</b></label>
                            <select id="make" onchange="giveSelection(this.value)">
                              <option value="Aston Martin" >Aston Martin</option>
                              <option value="BMW" >BMW</option>
                              <option value="Ferrari" >Ferrari</option>
                              <option value="Lamborghini" >Lamborghini</option>
                              <option value="McLaren" >McLaren</option>
                              <option value="Porsche" >Porsche</option>
                            </select>

                            <label><b>Model:</b></label>
                            <select id="model">
                              <option data-option="Aston Martin" >Aston Martin DB11</option>
                              <option data-option="BMW" >BMW I8</option>
                              <option data-option="Ferrari" >Ferrari F12</option>
                            </select>
                        </div>


                        <div class="col-7 ">
                            <br/>
                           <label for="dateTimeInput" ><b>From:</b></label><br/>
                           <input class="form-control" type="datetime-local" value="2020-07-13T13:45:00" id="dateTimeInput" required />
                           <label for="dateTimeInput" ><b>To:</b></label><br/>
                           <input class="form-control" type="datetime-local" value="2020-07-13T13:45:00" id="dateTimeInput" required /><br/>

                        </div>


                        <div class="alert alert-info" role="alert">
                                        	Please proceed to Payment section once the form is complete.
	                      </div>
                      </div>
                    </div>
                  </div>

                        <div class="tab-pane fade" id="nav-payment" role="tabpanel" aria-labelledby="nav-payment-tab">

  						          <div id="credit-card" class="tab-pane fade show active pt-3">
  							          <div class="col-7">

  							{/* 	<!-- Payment form inspired by Bootstrap snippets website: https://bbbootstrap.com/snippets/payment-form-three-different-payment-options-13285516 --> */}
                      <form role="form">

                          <div class="form-group">
                            <label for="cardowner"> <b>Card Owner:</b> </label>
                              <input type="text" name="cardowner" placeholder="Card Owner Name" required class="form-control " />
                          </div>

                          <div class="form-group">
                            <label for="cardNumber"> <b>Card number:</b> </label>
                              <div class="input-group">
                                <input type="text" name="cardNumber" placeholder="Valid card number" class="form-control " required />
                                  <div class="input-group-append"> <span class="input-group-text text-muted"> <i class="fab fa-cc-visa mx-1"></i> <i class="fab fa-cc-mastercard mx-1"></i> <i class="fab fa-cc-amex mx-1"></i> </span>
                                  </div>
                              </div>
                          </div>

                          <div class="row">
                            <div class="col-sm-8">
                              <div class="form-group"> <label><span class="hidden-xs"><b>Expiration Date:</b></span></label>
                                <div class="input-group"> <input type="number" placeholder="MM" name="" class="form-control" required />
                                  <input type="number" placeholder="YY" name="" class="form-control" required />
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card"><b>CVV: <i class="fa fa-question-circle d-inline"></i></b></label>
                                <input type="text" required class="form-control" />
                              </div>
                            </div>
                          </div>

                          <div> <button type="submit" class="subscribe btn btn-primary btn-block " > Confirm Booking </button><br/></div>
                        </form>
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header">
                        <Link class="collapsed card-link" to="/contact">Need Help?</Link>
                      </div>
                    </div>

                  </div>
  					     </div>
                </div>
               </div>
              </div>


    )

  }
}

export default Book;
