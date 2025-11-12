import { useState } from "react";

function DashboardPage() {
	const [count, setCount] = useState(0);

	return (
		<section>
			<div>
				<a className="animated-underline" data-config-color="accent" href="https://vite.dev">
					Vite
				</a>
				<a className="animated-underline" href="https://react.dev">
					React
				</a>
			</div>
			<h1>Vite + React</h1>
			<span className="i-lucide-home"></span>
			<div>
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p>Click on the Vite and React logos to learn more</p>
		</section>
	);
}

export default DashboardPage;
