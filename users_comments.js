const users = [
    { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
    { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
    { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
    { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
    { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
    { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
    { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
    { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
    { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
    { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
];

const comments = [
    { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
    { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
    { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
    { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
];


// Exercises


// 1) What is Madison Marshall's user id?
// Function to find the user id using first and last name
const getUserId = (fullName) => {
    // Destructuring the first and last name from fullName
    const [firstName, lastName] = fullName;

    // Searching for the user
    const user = users.find((user) => {
        // Checking if both first name and last name match
        return user.firstName === firstName && user.lastName === lastName;
    });

    // If user found, return the user id, otherwise return a message
    return user ? user.id : 'User not found';
}



// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)
const whoWroteComment = (comment) => users.find((user) => user.id === comment.userId);



// 3) Which user commented 'OK great thanks'?
const userByCommentText = (commentText) => {
    const comment = comments.find((comment) => comment.text === commentText);
    return comment ? users.find((user) => user.id === comment.userId) : 'comment not exists';
}



// 4) Add the user's first and last name to each comment in the comments array
const addFirstAndLastNameToComments = () => comments.map((comment) => {
    const user = whoWroteComment(comment);
    return {...comment, userFirstName: user.firstName, userLastName: user.lastName};
});



// 5) Get a list of the users who haven't commented
const isComment = (user) => {
    for (let i = 0; i < comments.length; i++) {
        if(comments[i].userId === user.id) {
            return true;
        } 
    }
    return false;
}
const usersNotComment = () => users.filter((user) => !isComment(user));

// Example usage
console.log(usersNotComment());