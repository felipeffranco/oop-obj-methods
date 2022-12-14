// TODO: write the methods getAge, addJoke and getRandomJoke

const chuck = {
    firstName: 'Chuck',
    lastName: 'Norris',
    birthDate: new Date('1940-03-10'),
    jokes: ['Chuck Norris counted to infinity... Twice.', 'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis'],
    displayInfo() {
      console.log(`My name is ${this.firstName} ${this.lastName} and I have ${this.jokes.length} jokes.`);
    },
    getAge() {
        // TODO
        // Hint: to get the current time, you can do: new Date()
        let today = new Date();
        // Hint: to get the birthDate, you can do: this.birthDate
        let birthDate = this.birthDate;
        // Hint: you can subtract 2 dates and you get the number of milliseconds
        var age = today.getFullYear() - birthDate.getFullYear();
        var month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    },
    addJoke(joke) {
      // TODO (don't use return statement)
      joke = this.joke;
    },
    getRandomJoke() {
        // TODO
        let randomJoke = this.jokes[Math.floor(Math.random() * this.jokes.length)]
        return randomJoke;
    }
  };
  
  chuck.displayInfo();
  
  console.log('getAge', chuck.getAge()); // Should return 80 if you are in 2020
  
  chuck.addJoke('Chuck Norris can divide by zero.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris kills flies with his gun.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  
  chuck.displayInfo();
  