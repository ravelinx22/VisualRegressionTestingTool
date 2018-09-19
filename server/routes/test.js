var router = require("express").Router();
var Test = require("../models/test");
const puppeteer = require('puppeteer');
var resemble = require('resemblejs-node');
const fs = require("mz/fs");

router.get("/", function(req, res) {
	takeScreenshot("https://ravelinx22.github.io/ComplementaryColorPaletteCreator/");
	res.json({buenas: "test"});
});

const takeScreenshot = async(url) => {
	let first = "client/img/tests/firstPhoto.png";
	let second = "client/img/tests/secondPhoto.png";
	let result = "client/img/tests/diff.png";
	const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
	const page = await browser.newPage();
	await page.goto(url);
	await page.evaluate(() => {
		document.getElementById("generateReport").click();
	});
	await page.screenshot({path: first});
	await page.evaluate(() => {
		document.getElementById("generateReport").click();
	});
	await page.screenshot({path: second});
	await browser.close();

	let diff = resemble(first).compareTo(second).ignoreColors();
	let diffResult = await new Promise((resolve) => diff.onComplete(resolve));
	diffResult.getDiffImage().pack().pipe(fs.createWriteStream(result));
}

module.exports = router;

