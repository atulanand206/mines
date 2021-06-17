import Logo from "../../mines/Header/Logo";
import "./Landing.scss";
import 'animate.css/animate.css'
import { Squares } from '../Squares/Squares'
import './Lines.scss'
import './Bumps.scss'
import './Light.scss'

const Lines = () => {
	return (
		<div className="speedlines">
			<div className="one tail"></div>
			<div className="two tail"></div>
			<div className="three"></div>
			<div className="four"></div>
			<div className="five tail"></div>
		</div>
	);
}

const Bumps = () => {
	return (
		<div className="bump-container">
			<div className="three">
					<div className="bump move"></div>
				</div>
		</div>
	);
}

const Light = () => {

	return (
		<div className='light__wire'>

		</div>
	)
}

const logoutConfirmation = () => {
alert('Do you want to logout?')
}

const Menu = () => {
	return (
		<div className="intro-container-foreground">
				<p className="intro-outro">GAME MODE</p>
				<div className="intro-divider"></div>
				<p className="intro-outro">STANDINGS</p>
				<div className="intro-divider"></div>
				<p className="intro-outro">CREATOR</p>
				<div className="intro-divider"></div>
				<p className="intro-outro" onClick={() => logoutConfirmation()}>GO BACK</p>
			</div>
	)
}

const Landing = () => {

	var frame: string[] = []
	for (var i = 0; i < 400; i++) frame.push(' ')

	return (
		<div className="intro-container">
			<Squares frame={frame} />
			{/* <Logo/> */}
			<div className="intro-container-background"></div>
		  <Menu />
			<Light />
			{/* <Lines /> */}
			{/* <Bumps /> */}
			<p className='intro-hash'>#</p>

			<img className='intro-img-icon' src='mine.svg' />
		</div>
	);
};

export default Landing;
