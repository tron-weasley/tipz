// import React, { Component } from "react";
// import $ from "jquery";
// // import API from "../../../utils/API"
// //importing this deconsctructed as React, {Component} is mostly for readability.
// //I don't think you need this ^^
// import "./Mileage.css";
// //import your API from your utils folder. Look at the final book-app that we
// //built in className for an example of a good api.


// // TODO - Move these ^^^ into state?
// // what about STOPS data? Create new data in state for each stop id?

// // TODO - EXPORT ^^^ data into API.js

// // 1. Capture data from inputs
// // 2. Import data values into API.js
// // 3. Run API with data
// // 4. Return JSON data
// // 5. Import JSON data into Mileage.js
// // 6. Display on page

// class Mileage extends Component {
//     state = {
//         results: "",
//         dropdownVal: "",
//         totalDist: 0,
//         startStreet : $("#startStreet").val(),
//         startCity : $("#startCity").val(),
//         startState : $("#startState").val()
//     }

//     // After you setup the state, you should define your methods for this component. 
//     //You can think of components as a complex object. Just like the constructors we used
//     //to build in plain Javascript. Any functions you put in here can update the state
//     //and therefore can change the way the application behaves or looks.

//     handleStopSelect = (event) => {
//         this.setState({
//             dropdownVal: event.target.value
//         }, () => {
//             console.log(this.state.dropdownVal);
//         })
//     }

//     //These are examples of what your methods might look like based on the code you sent.
//     populateStops = (x) => {
//         // Remove previous divs if "dropdown" number changes.
//         $("<div/>").attr('id', 'stops').appendTo('page');
//         for (let j = 5; j >= 0; j--) {
//             let stop = "stop" + j;
//             $('#' + stop).remove();
//         }
//         // Generate [i] number of input fields, where [i] is 'dropdown' number.
//         for (var i = 1; i <= this.state.dropdownVal; i++) {
//             var stop = "stop" + i;
//             var street = "street" + i;
//             var city = "city" + i;
//             var state = "state" + i;
//             $("#stops").append("<div id=" + stop + ">");

//             // TODO *************** data value ****************
//             // console.log(stop);

//             // TODO add 'onChange' to forms to setState(...)
//             $('#' + stop).html("<h2>Stop " + i + ": <br /></h2>" +
//                 "Street:<input id='" + street + "' className='input' type='text' onChange=/><br />" +
//                 "City:<input id='" + city + "' className='input' type='text' /><br />" +
//                 "State:<input id='" + state + "' className='input' type='text' /><br />");
//         }
//         // prevents additional 'submit' buttons from appending on page
//         $("#submitApi").remove();
//         // create submit button after all 'stops' inputs
//         // $("#stops").append(`<input id='submitApi' onClick={() => this.fetchAddress(this.state.dropdownVal)} type='submit' /></div>`)
//         console.clear();
//         console.log(
//             i - 1 + " stops entered" +
//             "\n-----------------------");
//     }

//     handleChange = () => { }

//     fetchAddress = (dropdownVal) => {
//         console.log(this.state.startStreet);

//         console.log("API Blastoff")

//         // for (let i = 1; i <= dropdownVal; i++) {
//         //     let stop = "stop" + i;
//             // this.setState({stop: e.target.value })
//         }
//         // API.getCoords(dropdownVal)
//         //     .then(res =>

//         //         // Unhandled Rejection(TypeError): Cannot read property 'data' of undefined
//         //         // this.setState({ stopsArr: res.data, totalDist: res.data }),
//         //         console.log("API function called")
//             // )
//     }


//     //The render method is required with a Class Component, 
//     //it will examine the state and props (if there are any) and render the 
//     //elements specified in the return statement following.
//     render() {
//         return (
//             //     {/*This is where you'd put the components on the page along with any
//             // props you'd need to pass into them; including onClick functions.
//             // Be sure to wrap them in a div */}


//             <div className="card">
//                 <h2>Please Enter Start Location: <br /></h2>
//                 Street:<input id="startStreet" className="input" type="text" /><br />
//                 City:<input id="startCity" className="input" type="text" /><br />
//                 State:<input id="startState" className="input" type="text" /><br />

//                 <div id="page"></div>
//                 <div id="results">
//                     {/* <API startStreet={startStreet} />
//                     <API startCity={startCity} />
//                     <API startState={startState} /> */}
//                 </div>
//                 <div id="stops">
//                     How Many Stops on your route?<br />
//                     <select id="dropdown"
//                         onChange={this.handleStopSelect}>

//                         <option value hidden>Select a response</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                     </select><br /> <br />
//                     <input id="submitStops" type="submit" onClick={this.populateStops()} />

//                 </div>
//                 <div id="submitButtonDiv" ><hr />
//                     <input id="submitAPI" type="submit" onClick={this.fetchAddress(this.state.dropdownVal)}
//                         {...(this.state.dropdownVal < 1)
//                             ? $('#submitButtonDiv').css({ 'display': 'none' })
//                             : $('#submitButtonDiv').css({ 'display': 'block' })
//                         } />
//                 </div>
//             </div>


//         )
//     }

// }

// export default Mileage