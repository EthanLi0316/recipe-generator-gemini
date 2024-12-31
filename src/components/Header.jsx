export default function Header({ name }) {
	return (
		<header className="nav-bar">
			<img src="src/assets/logo.svg" className="nav-logo" />
			<span>{name}</span>
		</header>
	);
}
