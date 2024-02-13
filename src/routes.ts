import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyReply,
    FastifyRequest,
} from "fastify";
import { CreateCustomerController } from "./_controllers/CreateCustomerController";
import { ListCustomerController } from "./_controllers/ListCustomerController";
import { DeleteCustomerController } from "./_controllers/DeleteCustomerController";

export async function routes(
    fastify: FastifyInstance,
    options: FastifyPluginOptions
) {
    fastify.get(
        "/teste",
        async (request: FastifyRequest, reply: FastifyReply) => {
            return { ok: true };
        }
    );
    fastify.post(
        "/customer",
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new CreateCustomerController().handle(request, reply);
        }
    );
    fastify.get(
        "/customers",
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new ListCustomerController().handle(request, reply);
        }
    );
}
