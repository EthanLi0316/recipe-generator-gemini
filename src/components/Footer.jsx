import reactLogo from "../assets/react.svg";

export default function Footer({ creatorName }) {
	return (
		<footer className="footer">
			<div className="footer-content">
				<img src={reactLogo} className="react-logo" alt="React logo" />
				<span className="creator-name">{creatorName}</span>
			</div>
		</footer>
	);
}
