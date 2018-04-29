import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
	state = {

	}

	componentDidMount(){

	}

	render(){
		return (
		<div>
			<div className="navbar-fixed">
				<nav className="black">
					<div className="container">
						<div className="nav-wrapper">
							<a href="#home" className="brand-logo weight-900">JJ</a>
							<a href="#" data-target="mobile-nav" className="sidenav-trigger">
								<i className="material-icons">menu</i>
							</a>
							<ul className="right hide-on-med-and-down">
								<li>
									<a className="" href="#home">Top</a>
								</li>
								<li>
									<a className="" href="#services">Services</a>
								</li>
								<li>
									<a className="" href="#team">Team</a>
								</li>
								<li>
									<a className="" href="#contact">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<ul className="sidenav" id="mobile-nav">
				<li>
					<a href="#home">Top</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#team">Team</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
		)
	}
}

export default Navbar;