import { UserModel, UserSchema } from "../schema/user";

export const CreateNewUserService = async (data: UserSchema) => {
  if (!data.address || !data.dob || !data.name) {
    throw new Error("Insuficient arguments");
  }

  const userCreated = await UserModel.create({
    name: data.name,
    address: data.address,
    dob: data.dob,
    description: data.description,
  });

  return userCreated;
};
