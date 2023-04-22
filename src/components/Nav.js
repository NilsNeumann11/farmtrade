import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<nav>
				<ul>
					<li className="nav-item">
						<Link to={"/"}>Home</Link>
					</li>
					<li className="nav-item">
						<Link to={"/"}>Events</Link>
					</li>
					<li className="nav-item">
						<Link to={"/"}>Fresh Board</Link>
					</li>
					<li className="nav-item">
						<Link to={"/"}>What`s new</Link>
					</li>
					<li className="nav-item">
						<Link to={"/"}>Profile</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
