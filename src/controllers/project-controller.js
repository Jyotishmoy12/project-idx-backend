import { StatusCodes } from "http-status-codes";
import { createProjectService, getProjectTreeService } from "../services/project-service.js";
export const createProjectController = async (req, res) => {
  const projectId = await createProjectService();
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "Project created successfully",
    error: {},
    data: projectId,
  });
};

export const getProjectTree = async(req, res)=>{
  const tree = await getProjectTreeService(req.params.projectId);
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "Project tree fetched successfully",
    error: {},
    data: tree,
  });
}

