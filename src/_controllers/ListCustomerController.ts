import { FastifyReply, FastifyRequest } from "fastify";
import { ListCustomerService } from "../_services/ListCustomerService";

class ListCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCustomerService = new ListCustomerService();

        const customers = await listCustomerService.execute();

        reply.send(customers);
    }
}

export { ListCustomerController };
