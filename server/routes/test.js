var router = require("express").Router();
var Test = require("../models/test");
const puppeteer = require('puppeteer');

router.get("/", function(req, res) {
	takeScreenshot("https://ravelinx22.github.io/ComplementaryColorPaletteCreator/");
	res.json({buenas: "test"});
});

const takeScreenshot = async(url) => {
	const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
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

