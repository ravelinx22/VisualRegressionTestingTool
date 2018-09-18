var router = require("express").Router();
var Test = require("../models/test");
const puppeteer = require('puppeteer');

router.get("/", function(req, res) {
	takeScreenshot("http://127.0.0.1:8887/");
	res.json({buenas: "test"});
});

const takeScreenshot = async(url) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	await page.evaluate(() => {
		document.getElementById("generateReport").click();
	});
	await page.screenshot({path: 'client/img/tests/firstPhoto.png'});
	await page.evaluate(() => {
		document.getElementById("generateReport").click();
	});
	await page.screenshot({path: 'client/img/tests/secondPhoto.png'});
	await browser.close();
}

module.exports = router;

