import dotenv from "dotenv";

dotenv.config();

const ServerConfig = {
  PORT: process.env.PORT,
  REACT_PROJECT_COMMAND: process.env.REACT_PROJECT_COMMAND,
};

export default ServerConfig;
