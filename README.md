# twitter-clone

### install dependencies


`npm i`

OR
```
npm i express mongoose bcryptjs jsonwebtoken
npm i nodemon (optional)
```

### create `.keys.js` in root directory


```javascript
//.keys.js
module.exports = {
	URL: 'mongodb://localhost:27017/quitter_db',
	JWT_SECRET: "<insert_secret_number_here>"
}
```
