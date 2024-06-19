// Dummy users data
export var users = [
  {
    id: 1,
    name: 'Example User 1',
    email: 'example-1@example.com',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Example User 2',
    email: 'example-2@example.com',
    role: 'normal',
  },
  {
    id: 3,
    name: 'Example User 3',
    email: 'example-3@example.com',
    role: 'normal',
  },
  {
    id: 4,
    name: 'Example User 4',
    email: 'example-4@example.com',
    role: 'normal',
  },
  {
    id: 5,
    name: 'Example User 5',
    email: 'example-5@example.com',
    role: 'normal',
  },
];

function sortById(arr) {
  return arr.sort((a, b) => a.id - b.id);
}

export function getUsers() {
  return users;
}

export function deleteUser(user) {
  const id = parseInt(user.id, 10);
  users = users.filter((user) => user.id !== id);
}

export function updateUser(user) {
  const id = parseInt(user.id, 10);
  const origUser = users.find((x) => x.id === id) || {};
  const updated = { ...origUser, ...user }; // merge old and new users array
  const filtered = users.filter((x) => x.id !== id);
  users = sortById([...filtered, updated]); // add updated user to array and sort by ID
}

export function getUserById(id) {
  id = parseInt(id, 10);
  return users.find((x) => x.id === id);
}

export function getUserByEmail(email) {
  return users.find((x) => x.email === email);
}

export function addUser(user) {
  users = sortById([...users, user]);
}
