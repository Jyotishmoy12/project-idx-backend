import fs from "fs/promises"
import uuid4 from "uuid4"
import path from "path";
import ServerConfig from "../config/server-config.js";
import { execPromisified } from "../utils/execUtility.js";
import directoryTree from "directory-tree";

export const createProjectService = async () => {
    const { REACT_PROJECT_COMMAND } = ServerConfig;
    const projectId = uuid4()
    console.log("New project id", projectId)
    await fs.mkdir(`./projects/${projectId}`)
    const response = await execPromisified(REACT_PROJECT_COMMAND, {
        cwd: `./projects/${projectId}`
    })
    return projectId;
}

export const getProjectTreeService = async (projectId) => {
     const projectPath = path.resolve(`./projects/${projectId}`)
     const tree = directoryTree(projectPath);
     return tree;
}
