import { asyncHandler } from "../utils/asyncHandler";
import { avatarSchema } from "../validators/schema";
import { ApiError } from "../utils/apiError";
import {} from "../generate/image.ts";
import { uuid } from "uuidv4";
import { createImage } from "../generate/image.ts";

export const createAvatar = asyncHandler(async (req, res) => {
  const { success, data } = avatarSchema.safeParse(req.body);
  if (!success) {
    throw new ApiError(400, "incorrect creds");
  }
  const leftProfileId = uuid();
  const rightProfileId = uuid();
  const frontProfileId = uuid();

  await Promise.all([
    createImage(
      "Create a side profile for the user for the left side. It should be a high quality portfolio shoot type photo",
      data.images,
      `../assets/${leftProfileId}.png`,
    ),
    createImage(
      "Create a side profile for the user for the right side. It should be a high quality portfolio shoot type photo",
      data.images,
      `../assets/${rightProfileId}.png`,
    ),
    createImage(
      "Create a front profile for the user. It should be a high quality portfolio shoot type photo",
      data.images,
      `../assets/${frontProfileId}.png`,
    ),
  ]);
  //from here send it to s3

  res.json({});
});
export const getAvatar = asyncHandler(async (req, res) => {});
export const getAvatars = asyncHandler(async (req, res) => {});
