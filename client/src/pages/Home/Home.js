import React, {Component} from "react";
import Slider from "../../components/Slider";
import Details from "../../components/Details";
// import Pushdown from "../../components/Pushdown";
// <Pushdown />
// import Portfolio from "../../components/Portfolio";
// <Portfolio />
// import AdditionalDetails from "../../components/AdditionalDetails";
// <AdditionalDetails />
import Team from "../../components/Team";
import Follow from "../../components/Follow";
import Contact from "../../components/Contact";
import About from "../../components/About";

class Home extends Component {
	state = {

	}

	render(){
		return (
			<div>
				<Slider />
				
				<About />
				<Details />
				<Team />
				<Follow />
				<Contact />
			</div>
		)
	}
}

export default Home;