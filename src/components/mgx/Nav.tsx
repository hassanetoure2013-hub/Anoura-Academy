import type { JSX } from "react";
import { NavLink } from "react-router-dom";
import { MGX_KNOWN_SLUGS } from "./content";

function toLabel(slug: string): string {
	return slug
		.split("-")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(" ");
}

export default function MGXNav(): JSX.Element {
	return (
		<nav className="mgx-nav">
			<div className="mgx-logo">MGX</div>
			<ul>
				{MGX_KNOWN_SLUGS.map((slug) => (
					<li key={slug}>
						<NavLink
											to={`/${slug}`}
							className={({ isActive }) => (isActive ? "mgx-link active" : "mgx-link")}
						>
											{toLabel(slug)}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
