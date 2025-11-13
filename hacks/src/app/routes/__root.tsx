import { createRootRoute } from "@tanstack/react-router";
import SimpleSidebarLayout from "$shared/ui/layout/SimpleSidebarLayout";

export const Route = createRootRoute({
	component: SimpleSidebarLayout,
});
