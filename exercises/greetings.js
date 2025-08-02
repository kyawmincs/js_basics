function greetings(nameArray, jobObject) {
  console.log(
    `Hello, ${nameArray.join(' ')}! Nice to have a ${jobObject.title} ${
      jobObject.occupation
    } around.`,
  );
}

console.log(
  greetings(['John', 'Q', 'Doe'], {title: 'Master', occupation: 'Plumber'}),
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
