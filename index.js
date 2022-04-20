const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Look mama i wnat to talhk with you do you kow this i wanna right with with you !!')

});
app.listen(port, () => {
    console.log('Listening to port', port);
    
})