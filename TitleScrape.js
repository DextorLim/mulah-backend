import axios from "axios";
import * as cheerio from "cheerio";

const response = await axios.get("https://www.theverge.com/");
const html = response.data;

// Use Cheerio to parse the HTML
const $ = cheerio.load(html);

const Titles = [];
const articles = $("li");
for (const article of articles) {
  const text = $(article).text().trim();
  // Log each article's text content to the console
  const structuredData = {
    url: $(article).find("a").attr("href"),
    title: $(article).find("h2, h3").text(),
    time:
      $(article).find("time").text() ||
      $(article).find("span.font-light.text-gray-ef").text() ||
      $(article).find("span.font-light.text-black").text() ||
      $(article).find("span.font-light.text-gray-13").text(),
  };

  // Check if the title exists and is not just an empty string
  if (structuredData.title != "") {
    // If there's a title, push the structured data to the array
    Titles.push(structuredData);
  }
}

const inline = $("p.inline");
for (const article of articles) {
  const text = $(article).text().trim();
  // Log each article's text content to the console
  const structuredData = {
    url: $(article).find("a").attr("href"),
    title: $(article).find("h2, h3").text(),
    time:
      $(article).find("time").text() ||
      $(article).find("span.font-light.text-gray-ef").text() ||
      $(article).find("span.font-light.text-black").text() ||
      $(article).find("span.font-light.text-gray-13").text(),
  };

  // Check if the title exists and is not just an empty string
  if (structuredData.title != "") {
    // If there's a title, push the structured data to the array
    Titles.push(structuredData);
  }
}

console.log(Titles);

{
  /*for (const data of articlesWithTitles) {
  const para = document.createElement("p");
  const content = document.createTextNode(data.url);
  para.appendChild(content);
}*/
}
