const bcrypt = require('bcrypt');

async function generatePassword() {
  const password = 'faith123';
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Hashed Password:', hashedPassword);
}

generatePassword();

// INSERT INTO users (name, email, password, role)
// VALUES (
//   'Admin User',
//   'admin@park.com',
//   '$2b$10$ci/DYqVKxrPnEwVh9wIIqu1zeKbRm5PCpKvMO7UjQYkE368uOn5xe',
//   'admin'
// );