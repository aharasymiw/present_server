const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/poll', (req, res) => {

})

app.post('/poll', (req, res) => {

})

app.get('/poll/invite', (req, res) => {
    res.sendFile(path.join(__dirname, 'poll_invite.png'));
})

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
