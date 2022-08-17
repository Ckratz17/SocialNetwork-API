# Social Network API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    ##Table of Contents
   
[Description](#description)
    
[Installation](#installation)
    
[Usage](#usage)
    
[License](#license)
    
[Contributing](#contributing)
    
[Testing](#testing)
    
[Questions](#questions)
    
## Description
    
This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. To view a walkthrough tutorial, go here: https://drive.google.com/file/d/1p6kVGEdHhfun6jMisZmWuXb7Dumc-8gy/view
    
## Installation
    
Download or clone repository to use this application on local machine. Before running the server, make sure you have the proper npm's installed by running npm i in the terminal.
    
## Usage
    
After installation, run npm start in the terminal to initiate the server. Once the server is running, open MongoDB and connect to the MonggoseDB URI. You will now have a socialDB. Click on socialDB  to see the thoughts and users data.
    
## License
    
MIT
    
## Contributing
    
n/a

## Testing

On Insomnia, the following API routes have been created and used to add, update, and delete users, friends, thoughts, and reactions in the database:

📁 **USER**

- Create a new user: `POST /api/users`
- Get all users: `GET /api/users`
- Get a single user by its `id`: `GET /api/users/:userId`

- Update a user by its `id`: `PUT /api/users/:userId`

- Delete a user by its `id`: `DELETE /api/user/:userId`

📁 **FRIEND**

- Add a new friend to a user's friend list: `POST /api/users/:userid/friends/:friendId`
- Delete a friend from a user's friend list: `DELETE /api/users/:userid/friends/:friendId`

📁 **THOUGHT**

- Create a new thought: `POST /api/thoughts/`
- Get all thoughts: `GET /api/thoughts/`
- Get a single thought by its `id`: `GET /api/thoughts/:thoughtId`
- Update a thought by its `id`: `PUT /api/thoughts/:thoughtId`
- Delete a thought by its `id`: `DELETE /api/thoughts/:thoughtId`

📁 **REACTION**

- Create a reaction: `POST /api/thoughts/:thoughtId/reactions`
- Delete a reaction by the `reactionId`: `DEL /api/thoughts/:thoughtId/reactions/:reactionId`

## Questions
If you have any questions, comments, or concerns please contact me at:
ckratz17@gmail.com

(https://github.com/Ckratz17/SocialNetwork-API)

