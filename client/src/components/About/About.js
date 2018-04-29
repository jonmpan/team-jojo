import React, {Component} from "react";
import "./About.css";

class About extends Component{

	state={
		espurr:false,
		jon:false
	}

	handleClick=(event)=>{
		const {name} = event.target;
		if(this.state[name]){
			this.setState({[name]:false})	
		}
		if(!this.state[name]){
			this.setState({[name]:true})
		}
	}

	render(){
		return(
			<section className="section center">
				<div className="container">
					<div className="row">
						<h3 className="weight-100 huge-bottom-margin">Need a Complex WebApp?</h3>
						<div className="row">
							<div className="col s12 m4">
								<h5 className="no-margin left-align"><strong className="weight-700">YOUR CONCEPTS</strong></h5>
								<p className="left-align">
									We design. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed risus ultrices, iaculis diam vel, rutrum massa. Donec odio urna, tristique eget mi luctus, consequat eleifend nisl. Nunc sed quam vulputate justo efficitur blandit sed nec mauris. Quisque gravida porttitor nunc, a ullamcorper odio gravida at.
								</p>
							</div>
							<div className="col s12 m4">
								<h5 className="no-margin left-align"><strong className="weight-700">OUR CODE</strong></h5>
								<p className="left-align">
									We build. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed risus ultrices, iaculis diam vel, rutrum massa. Donec odio urna, tristique eget mi luctus, consequat eleifend nisl. Nunc sed quam vulputate justo efficitur blandit sed nec mauris. Quisque gravida porttitor nunc, a ullamcorper odio gravida at.
								</p>
							</div>
							<div className="col s12 m4">
								<h5 className="no-margin left-align"><strong className="weight-700">YOUR REALITY</strong></h5>
								<p className="left-align">
									We innovate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed risus ultrices, iaculis diam vel, rutrum massa. Donec odio urna, tristique eget mi luctus, consequat eleifend nisl. Nunc sed quam vulputate justo efficitur blandit sed nec mauris. Quisque gravida porttitor nunc, a ullamcorper odio gravida at.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default About;