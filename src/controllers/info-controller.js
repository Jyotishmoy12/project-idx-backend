import { StatusCodes } from "http-status-codes";

export const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "API is working fine",
    error: {},
    data: {},
  });
};
