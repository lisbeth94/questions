/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */
const csv = require("csv-parser");
const fs = require("fs");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const args = process.argv.slice(-1);
console.log(`Running question #2 with args ${args}`);
const results = [];
const csvWriter = createCsvWriter({
  path: "output.csv",
  header: [
    { id: "productId", title: "productId" },
    { id: "clicks", title: "clicks" },
    { id: "impressions", title: "impressions" },
    { id: "ctr", title: "ctr" },
  ],
});
fs.createReadStream(args.toString())
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    const uniqueUsers = [...new Set(results.map((result) => result.user))];
    const uniqueProducts = [
      ...new Set(results.map((result) => result.entityId)),
    ];
    let data = [];
    uniqueProducts.forEach((product) => {
      let visitsPerProduct = [];
      let clicksPerProduct = [];
      results.forEach((result) => {
        if (product === result.entityId && result.eventType === "click") {
          clicksPerProduct.push(result.user);
        }
        if (product === result.entityId && result.eventType === "impression") {
          visitsPerProduct.push(result.user);
        }
      });
      let uniqueClicksPerProduct = [...new Set(clicksPerProduct)].length;
      let uniqueVisitsPerProduct = [...new Set(visitsPerProduct)].length;
      let ctr = (uniqueClicksPerProduct / uniqueVisitsPerProduct) * 100;
      data.push({
        productId: product,
        clicks: uniqueClicksPerProduct,
        impressions: uniqueVisitsPerProduct,
        ctr: ctr,
      });
    });
    csvWriter
      .writeRecords(data)
      .then(() => console.log("The CSV file was written successfully"));
  });