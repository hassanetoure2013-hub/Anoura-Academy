import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import MGXNav from "./Nav";

export default function MGXLayout(): JSX.Element {
	return (
		<div className="mgx-shell">
			<MGXNav />
			<main className="mgx-content">
				<Outlet />
			</main>
		</div>
	);
}
