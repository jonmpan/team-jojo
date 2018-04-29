import React, {Component} from "react";
import "./Slider.css";

class Slider extends Component {
	state = {

	}

	componentDidMount(){

	}

	render(){
		return(
			<section id="home" className="slider scrollspy">
				<ul className="slides">
					<li>
						<img src="/assets/img/background1-compressed.jpg" alt="" />
						<div className="caption center-align">
							<h3 className="grey-text text-darken-3">We <span className="black-text weight-700">Design!</span></h3>
							<h5 className="grey-text text-darken-3 hide-on-small-only">You want a cool webapp! You came to the right place!</h5>
						</div>
					</li>
					<li>
						<img src="/assets/img/background2-compressed.jpg" alt="" />
						<div className="caption right-align">
							<h3 className="grey-text text-lighten-2">We <span className="white-text weight-700">Code!</span></h3>
							<h5 className="grey-text text-lighten-2 hide-on-small-only">Once we start coding, your app will be done in no time!</h5>
						</div>
					</li>
					<li>
						<img src="/assets/img/background3-compressed.jpg" alt="" />
						<div className="caption left-align">
							<h3 className="grey-text text-darken-3">We <span className="black-text weight-700">Succeed!</span></h3>
							<h5 className="grey-text text-darken-3 hide-on-small-only">Your success is our success! We prioritize making your success a reality!</h5>
						</div>
					</li>

				</ul>
			</section>
		)
	}
}

export default Slider;

// <li>
// 	<img src="/assets/img/domo5.jpg" alt="MERNster coder" />
// 	<div className="caption right-align">
// 		<h3>The <strong><span className="red-text darken-text-4">MERNster</span></strong> Coder!</h3>
// 		<h5 className="light grey-text text-lighten-5 hide-on-small-only"><strong>Do you even flexbox?!? --Joe Faulstick</strong></h5>
// 	</div>
// </li>