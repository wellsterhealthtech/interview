import type { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
	fastify.get("/", async (_request, _reply) => {
		return { root: true, hugs: fastify.someSupport() };
	});
};

export default root;
