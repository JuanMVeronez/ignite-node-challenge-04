import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

export interface IListAllUsersRequestRequest extends Request {
  headers: {
    user_id: string;
  };
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: IListAllUsersRequestRequest, response: Response): Response {
    const { user_id } = request.headers;
    try {
      const allUsers = this.listAllUsersUseCase.execute({ user_id });
      return response.json(allUsers);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
