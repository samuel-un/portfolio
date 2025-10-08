export default function Button({
	as: Tag = "a",
	className = "",
	children,
	variant = "primary",
	...rest
}) {
	const base =
		"btn " + (variant === "primary" ? "btn--primary" : "btn--ghost");
	return (
		<Tag className={`${base} ${className}`} {...rest}>
			{children}
		</Tag>
	);
}
