import { Schema, model, models } from "mongoose";

// const newPostShema = new Schema(
//   {
//     postHeading: {
//       type: String,
//       required: [true, "heading is required."],
//     },
//     postContent: {
//       type: String,
//       required: [true, "Description is required."],
//     },
//   },
//   { timestamps: true }
// );

export const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists!"],
      requried: [true, "Email is required!"],
    },
    username: {
      type: String,
      required: [true, "Username is required!"],
      match: [
        /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
        "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
      ],
    },

    image: {
      type: String,
    },

    postsMade: [{
      type: Schema.Types.ObjectId,
      ref:"Post",
      required: true
    }],
  },
  { timestamps: true }
);

export const User = models.User || model("User", UserSchema);
