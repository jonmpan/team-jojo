import React, {Component} from "react";
import "./Contact.css";

class Contact extends Component{

	state = {
		comment:""
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		if(this.state.comment.length < 500){
			this.setState({
				[name]: value
			},()=>{
				if(this.state.comment.length > 500){
					this.setState({
						[name]: value.substring(0,499)
					})
				}
			});
		}
		else{
			this.setState({
				[name]:value.substring(0,499)
			})
		}
	};

	render(){
		return(
			<section id="contact" className="section section-contact scrollspy">
				<div className="container">
					<div className="row">
						<div className="col s12 m10 offset-m1 l8 offset-l2">
							<div className="card-panel indigo lighten-5">
								<div className="row no-margin">
									<div className="col s12">
										<h5>Contact Us</h5>
									</div>
								</div>
								<div className="row no-margin">
									<form action="https://formspree.io/someemail@someemail.com"
									method="POST" className="col s12 no-padding">
										<div className="row no-margin">
											<div className="input-field col s12">
												<i className="material-icons prefix">account_circle</i>
												<input id="name" type="text" className="validate" name="name" />
												<label htmlFor="name">Name</label>
											</div>
										</div>
										<div className="row no-margin">
											<div className="input-field col s12">
												<i className="material-icons prefix">mail</i>
												<input id="email" type="email" className="validate" name="_replyto" />
												<label htmlFor="email">Email</label>
											</div>
										</div>
										<div className="row no-margin">
											<div className="input-field col s12">
												<i className="material-icons prefix">comment</i>
												<textarea 
													id="comment" 
													type="text" 
													className="materialize-textarea validate" 
													name="comment" 
													data-length="500"
													onChange={this.handleInputChange}
													value={this.state.comment}
												></textarea>
												<label htmlFor="comment">Inquiry</label>
											</div>
										</div>
										<div className="row no-margin">
											<div className="col s12 right-align">
												<button className="btn waves-effect waves-light black darken-4" type="submit" name="action">
													<strong>Submit</strong>
													<i className="material-icons right">send</i>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col s12 m10 offset-m1 l8 offset-l2">
							<div className="card-panel black darken-4 white-text center">
								<i className="material-icons large">email</i>
								<h5>Or you can email us directly at:</h5>
								<h6>someemail@someemail.com</h6>
							</div>
						</div>
						
					</div>
				</div>
			</section>
		)
	}
}

export default Contact;