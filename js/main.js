var iceCream = ['butterscotch', 'mint chocolate chip', 'cookies and cream',
    'pistachio'
];
var presidents = {
    lastFive: [
        {firstName: 'Barack', lastName: 'Obama', termLength: 8, party: 'Democrat', yearsOfPresidency: '2009-2016'},
        {firstName: 'George W.', lastName: 'Bush', termLength: 8, party: 'Republican', yearsOfPresidency: '2001-2009' },
        {firstName: 'Bill', lastName: 'Clinton', termLength: 8, party: 'Democrat', yearsOfPresidency: '1993-2001' },
        {firstName: 'George H.W.', lastName: 'Bush', termLength: 4, party: 'Republican', yearsOfPresidency: '1989-1993' },
        {firstName: 'Ronald', lastName: 'Reagan', termLength: 8, party: 'Republican', yearsOfPresidency: '1981-1989' }
    ]
};
console.log(presidents.lastFive[2].firstName + presidents.lastFive[2].lastName);
