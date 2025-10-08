export default function SectionTitle({ id, children, subtitle }) {
	return (
		<header id={id} className="container" style={{ marginBottom: 24 }}>
			<h2>{children}</h2>
			{subtitle && <p className="large">{subtitle}</p>}
		</header>
	);
}
