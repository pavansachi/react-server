import Component from "./Component";
import ReactDOMServer from "react-dom/server";
import React from 'react';
import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setContent(`
    <html>
    <head>
        <title></title>
    </head>
    <body>
        <div class="container" style="height:200px;width: 200px;border: 1px solid red">
            ${ReactDOMServer.renderToString(<Component />)}
        </div>
    </body>
    </html>
    `)
    await page.screenshot({path: 'example.png'})
    await browser.close()
  })()

console.log(ReactDOMServer.renderToString(<Component />));