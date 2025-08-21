import { Router } from "express";
import multer from "multer";
import uploadConfigs from "@/configs/upload";
import { UploadsController } from "@/controllers/uploads-controller";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

export const uploadsRoutes = Router();
const uploadsController = new UploadsController();

const upload = multer(uploadConfigs.MULTER);

uploadsRoutes.use(verifyUserAuthorization(["employee"]));
uploadsRoutes.post("/", upload.single("file"), uploadsController.create);
