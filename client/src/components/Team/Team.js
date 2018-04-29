import React, {Component} from "react";
import "./Team.css";
// const createMarkup = require("../../utils/library.js").createMarkup;

class Recommendations extends Component {
	render(){
		return(
			<section id="team" className="section white center scrollspy">
				<h4 className="grey-text text-darken-3">The <span className="black-text weight-700">Team</span></h4>

				<div className="container">
					<div className="row">
					<div className="col s12 m10 offset-m1 l8 offset-l2">
					<div className="row">
						
						<div className="col s12 m6 recommendation-row-margin">
							<div className="row no-margin">
								<div className="col s10 offset-s1 l8 offset-l2">
									<img className="circle responsive-img" src="/assets/img/joefaulstick.jpg" alt="placeholder"/>
								</div>
							</div>
							<div className="col s12 m10 offset-m1 l12">
								<blockquote className="no-margin left-align">I over thought a solution that didn't work. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis ultricies nisl, et mattis nulla. Sed rutrum ornare fringilla.
								<cite>Joe <strong>DadJokes</strong> Faulstick</cite>
								</blockquote>
							</div>
						</div>

						<div className="col s12 m6 recommendation-row-margin">
							<div className="row no-margin">
								<div className="col s10 offset-s1 l8 offset-l2">
									<img className="circle responsive-img" src="/assets/img/jonathanpan.jpg" alt="placeholder"/>
								</div>
							</div>
							<div className="col s12 m10 offset-m1 l12">
								<blockquote className="no-margin left-align">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis ultricies nisl, et mattis nulla. Sed rutrum ornare fringilla. Maecenas quis tortor nisi.
								<cite>Jonathan <strong>Mernster</strong> Pan</cite>
								</blockquote>
							</div>
						</div>
					</div>
					</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Recommendations;