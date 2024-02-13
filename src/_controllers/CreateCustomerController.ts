import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerService } from "../_services/CreateCustomerService";

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const customerService = new CreateCustomerService();

        const customer = await customerService.execute();

        reply.send(customer);
    }
}

export { CreateCustomerController };
