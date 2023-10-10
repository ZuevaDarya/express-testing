import { join } from "path";

/**
 * @type {import("puppeteer").Configuration}
 */

export default puppeterSetings = {
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};

