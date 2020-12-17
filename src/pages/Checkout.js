import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/checkout.css';


export default function Checkout() {
    
    const [flightDetails, setFlightDetails] = useState([]);
  

  useEffect(() => {
      console.log(window.location.href);
    //   const from = window.location.href.split("/").reverse()[2];
    //   const to = window.location.href.split("/").reverse()[1];
      const id = window.location.href.split("/").reverse()[0];
      console.log("ID -> " + id);
        
      const config = {
        method: "get",
        url: `http://localhost:8080/api/v1/flights/${id}`,
      };

      axios(config)
        .then((response) => {
          console.log(response.data);
          setFlightDetails(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);
    
    if (flightDetails === undefined) {
      return <h3>Loading...</h3>;
    }
    
    console.log(flightDetails);
    return (
        
            
            <div className="container" style={{marginTop:'100px', marginBottom:'60px'}}>
                <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    {/* <span className="badge badge-secondary badge-pill">3</span> */}
                    </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                <h6 className="my-0">{flightDetails.departureAirport.city.cityName} - {flightDetails.arrivalAirport.city.cityName} </h6>
                                       
                                <small className="text-muted">{ flightDetails.departureDate } </small>
                                    </div>
                                    <span className="text-muted">$12</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Second product</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$8</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Third item</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>$20</strong>
                                </li>
                            </ul>
                    
                    <form className="card p-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Promo code" />
                        <div className="input-group-append">
                        <button type="submit" className="btn btn-secondary">Redeem</button>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" noValidate>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder defaultValue required />
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                        </div>
                        <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" id="lastName" placeholder defaultValue required />
                        <div className="invalid-feedback">
                            Valid last name is required.
                        </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                        <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                        <div className="invalid-feedback">
                        Please enter your shipping address.
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 mb-3">
                        <label htmlFor="country">Country</label>
                        <select className="custom-select d-block w-100" id="country" required>
                            <option value>Choose...</option>
                            <option>United States</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid country.
                        </div>
                        </div>
                        <div className="col-md-4 mb-3">
                        <label htmlFor="state">State</label>
                        <select className="custom-select d-block w-100" id="state" required>
                            <option value>Choose...</option>
                            <option>California</option>
                        </select>
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                        </div>
                        <div className="col-md-3 mb-3">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" className="form-control" id="zip" placeholder required />
                        <div className="invalid-feedback">
                            Zip code required.
                        </div>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="same-address" />
                        <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="save-info" />
                        <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                    </div>
                    <hr className="mb-4" />
                    <h4 className="mb-3">Payment</h4>
                    <div className="d-block my-3">
                        <div className="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                        <label className="custom-control-label" htmlFor="credit">Credit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                        <label className="custom-control-label" htmlFor="debit">Debit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                        <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                        <label className="custom-control-label" htmlFor="paypal">PayPal</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                        <label htmlFor="cc-name">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" placeholder required />
                        <small className="text-muted">Full name as displayed on card</small>
                        <div className="invalid-feedback">
                            Name on card is required
                        </div>
                        </div>
                        <div className="col-md-6 mb-3">
                        <label htmlFor="cc-number">Credit card number</label>
                        <input type="text" className="form-control" id="cc-number" placeholder required />
                        <div className="invalid-feedback">
                            Credit card number is required
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                        <label htmlFor="cc-expiration">Expiration</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder required />
                        <div className="invalid-feedback">
                            Expiration date required
                        </div>
                        </div>
                        <div className="col-md-3 mb-3">
                        <label htmlFor="cc-cvv">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" placeholder required />
                        <div className="invalid-feedback">
                            Security code required
                        </div>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <form action="/ordersuccess">
                        <button className="btn btn-primary btn-lg btn-block" type="submit" >Buy Now!</button>
                    </form>
                    </form>
                </div>
                </div>
            </div>
        )
}
