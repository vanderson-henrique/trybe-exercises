// Data
const users = [
  {
    login: "knuth",
    firstName: "Donald",
    lastName: "Knuth",
    likes: ["C", "Unix"],
  },
  {
    login: "norvig",
    firstName: "Peter",
    lastName: "Norvig",
    likes: ["AI", "Search", "NASA", "Mars"],
  },
  {
    login: "mfowler",
    firstName: "Martin",
    lastName: "Fowler",
    likes: ["Design Patterns", "Refactoring"],
  },
  {
    login: "kent",
    firstName: "Kent",
    lastName: "Beck",
    likes: ["TDD", "wikis", "Design Patterns"],
  },
];

// lookup()
const lookup = (login, property) => {
  const chosenUser = users.filter((user) => user.login === login);
  const possibleProperty = ["login", "firstName", "lastName", "likes"];
  if (possibleProperty.find((prop) => prop === property)) {
    if (chosenUser.length !== 0) {
      if (property === "likes") {
        return chosenUser[0].likes;
      } else if (property === "lastName") {
        return chosenUser[0].lastName;
      }
    } else {
      throw new Error("Could not find user");
    }
  } else {
    throw new Error("Could not find property");
  }
};

console.log(lookup("mfowler", "likes"));

module.exports = lookup;
