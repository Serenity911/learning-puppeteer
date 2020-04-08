const puppeteer = require("puppeteer");

console.log("hello");

// save screenshot as image
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://example.com");
//   await page.screenshot({ path: "example.png" });

//   await browser.close();
// })();

// save page as pdf
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 640,
    height: 200,
    deviceScaleFactor: 1,
  });
  await page.goto("https://gym-management-app.herokuapp.com/memberships/", {
    waitUntil: "networkidle2",
  });
  await page.pdf({ path: "test1.pdf", format: "A4" });

  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });

  console.log("Dimensions:", dimensions);

  await browser.close();
})();
