# Express Guest Book
Users can write new and browse others entries in the guest book.
This site has two pages:
- Homepage that lists all of the previously guestbook entries.
- A page with an "add new entry" form.

## Set up
- Create a package.json file
```
{
    "author": "Iriele Odinaka Moses",
    "name": "express-guestbook",
    "private": true,
    "scripts": {
        "start": "node app"
    }
}
```
- Install dependencies
```
npm install express morgan body-parser ejs --save
```

