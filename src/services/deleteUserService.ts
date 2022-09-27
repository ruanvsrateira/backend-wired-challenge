import { UserModel, UserSchema } from "../schema/user";

export const DeleteUserService = async (
  id: string
): Promise<UserSchema | null> => {
  const userDeleted = await UserModel.findByIdAndDelete(id);

  return userDeleted;
};
