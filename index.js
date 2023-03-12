const request = require('request');
const cheerio = require('cheerio');

request('https://www.example.com', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    // Отримати заголовок статті
    const articleTitle = $('h1').text();

    // Отримати автора статті
    const authorName = $('.author-name').text();

    // Отримати дату публікації статті
    const publishDate = $('.publish-date').text();

    // Отримати зміст статтіі
    let articleContent = '';
    $('.article-content p').each((i, el) => {
      articleContent += $(el).text() + '\n';
    });

    // Отримати список тегів статті
    let articleTags = [];
    $('.tags li').each((i, el) => {
      articleTags.push($(el).text());
    });

    console.log('Назва статті: ' + articleTitle);
    console.log('Автор статті: ' + authorName);
    console.log('Дата публікації: ' + publishDate);
    console.log('Зміст статті:\n' + articleContent);
    console.log('Теги статті: ' + articleTags.join(', '));
  }
});
