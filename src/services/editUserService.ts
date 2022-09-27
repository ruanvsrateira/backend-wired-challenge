import { UserModel, UserSchema } from "../schema/user";

export const EditUserService = async (
  id: string,
  data: UserSchema
): Promise<UserSchema> => {
  if (!data.address || !data.dob || !data.name) {
    throw new Error("Insuficient arguments");
  }

  const userEdited = await UserModel.findByIdAndUpdate(
    id,
    {
      name: data.name,
      address: data.address,
      dob: data.dob,
      description: data.description,
    },
    { new: true }
  );

  return userEdited!;
};
