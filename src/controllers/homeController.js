const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
};

const displayUser = (req, res) => {
    connection.query(
        'SELECT * FROM Users',
        function (err, results, fields) {
            if (err) {
                console.error('Error executing query:', err);
                res.send(err);
                return;
            }
            res.send(results);
        }
    );
};

const postCreateUser = (req, res) => {
    let {email, myName, address} = req.body;
    console.log(email, myName, address);

    connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)',
        [email, myName, address],
        function (err, results) {
            console.log(email, myName, address);
            if (err) {
                console.error('Error executing query:', err);
                res.send(err);
                return;
            }
            res.send('New user created successfully');
        }
    );
};

module.exports = {
    getHomepage,
    postCreateUser,
    displayUser
};
