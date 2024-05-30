import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (request, response) => {
  response.json({ message: "Api route is working!!" });
};

export const updateuser = async (request, response, next) => {
  if (request.user.id !== request.params.id) {
    return next(errorHandler(401, "You can only update your own account!"));
  }
  try {
    if (request.body.password) {
      request.body.password = bcryptjs.hashSync(request.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          username: request.body.username,
          email: request.body.email,
          password: request.body.password,
          avatar: request.body.avatar,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    response.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
