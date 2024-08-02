const bcrypt = require('bcryptjs')

module.exports = [
    { username: 'test', hashedPassword: bcrypt.hashSync('admin', 10)},
    { username: 'JohnDoe', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'JaneSmith', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'MichaelJohnson', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'EmilyDavis', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'ChrisBrown', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'JessicaWilliams', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'DanielJones', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'AshleyGarcia', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'DavidMartinez', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'SarahMiller', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'AndrewWilson', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'LauraMoore', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'JamesTaylor', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'MeganAnderson', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'MatthewThomas', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'OliviaJackson', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'JoshuaWhite', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'SophiaHarris', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'AnthonyClark', hashedPassword: bcrypt.hashSync('admin', 10) },
    { username: 'IsabellaLewis', hashedPassword: bcrypt.hashSync('admin', 10) },
]

