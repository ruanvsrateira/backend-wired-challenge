import { UserModel, UserSchema } from "../schema/user";

export const GetAllUsersService = async (): Promise<UserSchema[]> => {
  const users = await UserModel.find({});

  return users;
};
