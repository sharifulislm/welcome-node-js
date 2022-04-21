const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look mama i wnat to talhk with you do you kow this i wanna right with with you !!')

});
const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '0178888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'suchonda', email: 'suchonda@gmail.com', phone: '0178888888' },
    { id: 5, name: 'srabonti', email: 'srabonti@gmail.com', phone: '0178888888' },
    { id: 6, name: 'sabila', email: 'sabila@gmail.com', phone: '0178888888' },
    { id: 7, name: 'sohana', email: 'sohana@gmail.com', phone: '0178888888' },
]

app.get('/users',(req,res) => {
    res.send(users);
})

app.get('/user/:id',(req,res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/users',(req,res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length +1;
    users.push(user);
    res.send(user);
   

    
});
app.get('/fruits', (req,res) => {
    res.send(['mango','apple','oranges']);
});
app.get('/fruits/mango/fazle', (req, res) =>{
    res.send('sour sour fazle flavor');
});

app.listen(port, () => {
    console.log('Listening to port', port);
    
})