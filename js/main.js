// Array
var iceCream = ['butterscotch', 'mint chocolate chip', 'cookies and cream',
    'pistachio'
];

// Object
var presidents = {
    lastFive: [
        {firstName: 'Barack ', lastName: 'Obama', termLength: 8, party: 'Democrat', yearsOfPresidency: '2009-2016'},
        {firstName: 'George W. ', lastName: 'Bush', termLength: 8, party: 'Republican', yearsOfPresidency: '2001-2009' },
        {firstName: 'Bill ', lastName: 'Clinton', termLength: 8, party: 'Democrat', yearsOfPresidency: '1993-2001' },
        {firstName: 'George H.W. ', lastName: 'Bush', termLength: 4, party: 'Republican', yearsOfPresidency: '1989-1993' },
        {firstName: 'Ronald ', lastName: 'Reagan', termLength: 8, party: 'Republican', yearsOfPresidency: '1981-1989' }
    ]
};

console.log(presidents.lastFive[2].firstName + presidents.lastFive[2].lastName);

// Function 1: declaration
function howdy(name) {
    return name + ' says hi!';
}

console.log(howdy('Kenia Escobar'));

// Function 2
var string = ['7', 'seventy', 'university'];

for (var i = 0) {
    if (string[i].length < 7) {
        console.log('What a short little word!');
    }
    if (string[i].length > 7) {
        console.log("I'm sorry but that's too many words to count");
    }
    if (string[i].length = 7) {
        console.log("7, what a perfect choice!");
    }
}

// Function 3
function inception(display, favMovie) {
    display(favMovie);
}

console.log('Heathers is a fantastic movie');
