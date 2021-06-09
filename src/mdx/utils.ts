import fs from "fs";
import path from "path";

// to get the path to a specific folder, _posts
export const POSTS_PATH = path.join(process.cwd(), "./src/_posts");

// list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
