// variables

const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".text");
const person = document.querySelector(".person");

const quotes = [{
                    quote: `"Things work out best for those who make the best of how things work out.”`,
                    person: `John Wooden`
                },
                {
                    quote: `“Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.”`,
                    person: `Albert Einstein`
                },
                {
                    quote: `“If you put out 150 percent, then you can always expect 100 percent back.”`,
                    person:`Justin Timberlake`
                },
                {
                    quote:`“All our dreams can come true if we have the courage to pursue them.”`,
                    person:`Walt Disney`
                },
                {
                    quote:`“Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them.”`,
                    person:`Vaibhav Shah`
                },
                {
                    quote:`“Someone is sitting in the shade today because someone planted a tree a long time ago.”`,
                    person:`Warren Buffett`
                },
                {
                    quote:`“Success is walking from failure to failure with no loss of enthusiasm.”`,
                    person:`Winston Churchill`
                },
                {
                    quote:`“It does not matter how slowly you go, so long as you do not stop.”`,
                    person:`Confucius`
                },
                {
                    quote:`“The biggest risk is not taking any risk… In a world that’s changing really quickly, the only strategy that is guaranteed to fail is not taking risks.”`,
                    person:`Mark Zuckerberg`
                },
                {
                    quote:`“Many of life’s failures are people who did not realize how close they were to success when they gave up.”`,
                    person:`Thomas A. Edison`
                }
    ];


btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
