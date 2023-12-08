const express = require("express");
const app = express();

const port = process.env.port || 3000;

app.use(express.static("public"));

// Array of sample quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
  "Life is what happens when you're busy making other plans. - Allen Saunders",
  "Get busy living or get busy dying. - Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "If you want to achieve greatness stop asking for permission. - Anonymous",
  "Things work out best for those who make the best of how things work out. - John Wooden",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "If you're going through hell, keep going. - Winston Churchill",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Knowing is not enough; we must apply. Willing is not enough; we must do. - Johann Wolfgang von Goethe",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Knowing is not enough; we must apply. Willing is not enough; we must do. - Johann Wolfgang von Goethe",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  "Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along. - Napoleon Hill",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "I would rather die of passion than of boredom. - Vincent van Gogh",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Knowing is not enough; we must apply. Willing is not enough; we must do. - Johann Wolfgang von Goethe",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  "Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along. - Napoleon Hill",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "I would rather die of passion than of boredom. - Vincent van Gogh",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer"
];

// Route to get a random quote
app.get("/quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json({ quote: randomQuote });
});

app.listen(port, (req, res) => {
  console.log(`the port is ${port}`);
});
