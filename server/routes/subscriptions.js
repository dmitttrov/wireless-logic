const express = require("express");
const router = express.Router();
const puppeteer = require("puppeteer");

router.get("/", (req, res) => {
  getDnsSystems()
    .then((html) => res.status(200).send(html))
    .catch((error) => res.status(500).send(error));
});

async function getDnsSystems() {
  const dnsSystemUrl = "https://wltest.dns-systems.net/";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(dnsSystemUrl);

  const items = await page.$$eval("#subscriptions .package", (elements) =>
    elements.map((e) => ({
      optionTitle: e.querySelector("h3").innerText,
      description: e.querySelector(".package-description").textContent,
      price: e.querySelector(".package-price").textContent.split("\n")[0],
      discount: e.querySelector(".package-price p")?.innerHTML,
    }))
  );
  await browser.close();
  return items;
}

module.exports = router;
