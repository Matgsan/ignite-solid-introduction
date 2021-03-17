import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("Not found");
    }
    if (!user.admin) {
      throw new Error("Only Admin can list all users");
    }
    const list = this.usersRepository.list();
    return list;
  }
}

export { ListAllUsersUseCase };
