import { generateVideo } from "../generate/video";
import { asyncHandler } from "../utils/asyncHandler";
import type { Request, Response } from "express";

export const createVideo = asyncHandler(
  async (req: Request, res: Response) => {},
);
export const getVideo = asyncHandler(async (req: Request, res: Response) => {
  generateVideo(
    "The video opens with a medium, eye-level shot of a beautiful woman with dark hair and warm brown eyes. She wears a magnificent, high-fashion flamingo dress with layers of pink and fuchsia feathers, complemented by whimsical pink, heart-shaped sunglasses. She walks with serene confidence through the crystal-clear, shallow turquoise water of a sun-drenched lagoon. The camera slowly pulls back to a medium-wide shot, revealing the breathtaking scene as the dress's long train glides and floats gracefully on the water's surface behind her. The cinematic, dreamlike atmosphere is enhanced by the vibrant colors of the dress against the serene, minimalist landscape, capturing a moment of pure elegance and high-fashion fantasy.",
    [/*after uploading to cloudinary past the url here */],
    `../output/video.mp4`,
  );
});
export const getVideos = asyncHandler(
  async (req: Request, res: Response) => {},
);
