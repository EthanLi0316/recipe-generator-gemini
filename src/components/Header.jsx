import mainLogo from "../assets/logo.svg";

export default function Header({ name }) {
	return (
		<header className="nav-bar">
			<img src={mainLogo} className="nav-logo" alt="Logo" />
			<span>{name}</span>
		</header>
	);
}
