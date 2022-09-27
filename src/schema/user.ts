import { getModelForClass, prop } from "@typegoose/typegoose";
import { DateGenerator } from "../utils/dateGenerator";

export class UserSchema {
  @prop({ type: () => String, required: true })
  public name!: string;

  @prop({ type: () => String, required: true })
  public dob!: string;

  @prop({ type: () => String, required: true })
  public address!: string;

  @prop({ type: () => String, required: false })
  public description?: string;

  @prop({ type: () => String, default: DateGenerator() })
  public createdAt?: string;
}

export const UserModel = getModelForClass(UserSchema);
