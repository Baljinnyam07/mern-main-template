import mongoose, { Schema, Document, Types } from "mongoose";
export interface IUser extends Document<Types.ObjectId> {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
