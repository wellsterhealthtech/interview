import { Link, Outlet, useLocation } from "@tanstack/react-router";

function SimpleSidebarLayout() {
	const pathname = useLocation({
		select: (location) => location.pathname,
	});

	return (
		<main className="grid min-h-svh grid-cols-[auto_1fr]">
			<aside className="flex min-w-72 flex-col justify-between border-e border-accent-on-main-primary bg-background-accent-primary/10 p-xs-s">
				<nav>
					<ul className="grid gap-y-2xs-xs">
						<li>
							<Link
								className={`flex items-center gap-x-3xs-2xs rounded-md border p-3xs ${pathname === "/" ? "border-background-accent-primary bg-background-accent-primary/20" : "border-dashed border-transparent [&:where(:hover,:focus-visible)]:border-background-accent-primary/50 [&:where(:hover,:focus-visible)]:bg-background-accent-primary/10"}`}
								to="/"
							>
								<span className="i-lucide-home"></span>
								Dashboard
							</Link>
						</li>
						<li>
							<Link
								className={`flex items-center gap-x-3xs-2xs rounded-md border p-3xs ${pathname === "/team" ? "border-background-accent-primary bg-background-accent-primary/20" : "border-dashed border-transparent [&:where(:hover,:focus-visible)]:border-background-accent-primary/50 [&:where(:hover,:focus-visible)]:bg-background-accent-primary/10"}`}
								to="/team"
							>
								<span className="i-lucide-users-round"></span>
								Team
							</Link>
						</li>
						<li>
							<Link
								className={`flex items-center gap-x-3xs-2xs rounded-md border p-3xs ${pathname === "/tasks" ? "border-background-accent-primary bg-background-accent-primary/20" : "border-dashed border-transparent [&:where(:hover,:focus-visible)]:border-background-accent-primary/50 [&:where(:hover,:focus-visible)]:bg-background-accent-primary/10"}`}
								to="/tasks"
							>
								<span className="i-lucide-list-todo"></span>
								Tasks
							</Link>
						</li>
						<li>
							<Link
								className={`flex items-center gap-x-3xs-2xs rounded-md border p-3xs ${pathname === "/reports" ? "border-background-accent-primary bg-background-accent-primary/20" : "border-dashed border-transparent [&:where(:hover,:focus-visible)]:border-background-accent-primary/50 [&:where(:hover,:focus-visible)]:bg-background-accent-primary/10"}`}
								to="/reports"
							>
								<span className="i-lucide-chart-line"></span>
								Reports
							</Link>
						</li>
					</ul>
				</nav>

				<Link
					className={`flex items-center gap-x-3xs-2xs rounded-md border p-3xs ${pathname === "/settings" ? "border-background-accent-primary bg-background-accent-primary/20" : "border-dashed border-transparent [&:where(:hover,:focus-visible)]:border-background-accent-primary/50 [&:where(:hover,:focus-visible)]:bg-background-accent-primary/10"}`}
					to="/settings"
				>
					<span className="i-lucide-settings"></span>
					Settings
				</Link>
			</aside>
			<div className="p-xs-s">
				<Outlet />
			</div>
		</main>
	);
}

export default SimpleSidebarLayout;
