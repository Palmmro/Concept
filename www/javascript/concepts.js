/**
 * Created by palm on 2017-07-02.
 */
var movies = ["Nyckeln till frihet (1994)",
    "Gudfadern (1972)",
    "Gudfadern del II (1974)",
    "The Dark Knight (2008)",
    "12 edsvurna män (1957)",
    "Schindler's List (1993)",
    "Pulp Fiction (1994)",
    "Sagan om konungens återkomst (2003)",
    "Den gode, den onde, den fule (1966)",
    "Fight Club (1999)",
    "Sagan om ringen: Härskarringen (2001)",
    "Rymdimperiet slår tillbaka (1980)",
    "Forrest Gump (1994)",
    "Inception (2010)"];

var songs = ["Space Oddity",
    "What a wonderful world",
    "Your Song",
    "I Still haven't found what I'm looking for",
    "Smells like teen spirit",
    "Single Ladies",
    "All you need is love",
    "Rolling in the deep",
    "Anarchy in the UK",
    "Hotel California",
    "Wish you were here",
    "Blowin' in the wind",
    "I will Survive",
    "Stairway to heaven",
    "Wonderwall",
    "Dancing Queen",
    "Symphaty for the Devil",
    "Somewhere over the rainbow",
    "Redemption Song",
    "Life on Mars?"];

var allConcepts = [];
fillAllConcepts();

function fillAllConcepts(){
    allConcepts.push.apply(allConcepts,movies);
    allConcepts.push.apply(allConcepts,songs);

}