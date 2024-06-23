// Dummy users data
const VALID_ROLES = ["admin", "normal"];
export var users = [
  {
    id: 1,
    name: "Example User 1",
    email: "example-1@example.com",
    role: "admin",
  },
  {
    id: 2,
    name: "Example User 2",
    email: "example-2@example.com",
    role: "normal",
  },
  {
    id: 3,
    name: "Example User 3",
    email: "example-3@example.com",
    role: "normal",
  },
  {
    id: 4,
    name: "Example User 4",
    email: "example-4@example.com",
    role: "normal",
  },
  {
    id: 5,
    name: "Example User 5",
    email: "example-5@example.com",
    role: "normal",
  },
];

export const isValidRole = (role) => VALID_ROLES.includes(role);

function sortById(arr) {
  return arr.sort((a, b) => a.id - b.id);
}

export function getUsers() {
  return users;
}

const userExists = (user) => {
  const id = parseInt(user.id, 10);
  return users.find((user) => user.id === id);
};

export function deleteUser(user) {
  const id = parseInt(user.id, 10);
  if (!userExists(user)) {
    return false;
  }
  users = users.filter((user) => user.id !== id);
  return user;
}

export function updateUser(user) {
  const id = parseInt(user.id, 10);

  const origUser = users.find((x) => x.id === id) || {};

  // Remove empty values from updated user object so we don't overwrite existing values with blanks
  const fields = ["name", "email", "role"];
  for (const field of fields) {
    if (!user[field]) {
      delete user[field];
    }
  }
  const filtered = users.filter((x) => x.id !== id); // Remove the original user from the array

  // merge old and new users objects
  const updated = { ...origUser, ...user };

  users = sortById([...filtered, updated]); // add updated user to array and sort by ID
  return updated;
}

export function getUserById(id) {
  id = parseInt(id, 10);
  return users.find((x) => x.id === id);
}

export function getUserByEmail(email) {
  return users.find((x) => x.email === email);
}

// Return the current max user ID
const usersMaxId = (id) => Math.max(...users.map((b) => b.id));

// Add a new entry to users array
export function addUser({ id, name, email, role = "normal" }) {
  const userId = id || (usersMaxId() || 0) + 1;
  const user = { id: userId, name, email, role };
  if (!name || !email) {
    throw new Error("user name and email required");
  }
  if (!isValidRole(role)) {
    throw new Error("invalid role");
  }
  users = sortById([...users, user]);
  return user;
}
