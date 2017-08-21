import Math from './math';
import express from 'express';
const app = express();

app.get('/sum', function (req, res) {
    res.send(`The sum is ${Math.sum(1,1)}`)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

export default app;
