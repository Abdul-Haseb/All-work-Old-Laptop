const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    const bob = `${this.name[0]} is ${this.age} years old`;
    const smith = `${this.name[1]} is ${this.age} years old`;
    return `
    ${bob}
    ${smith}
    `;
  },
  introduceUrSelf: function () {
    return `HI, I am ${this.name[1]}`;
  },
};
const person2 = {
  name: ["Jackson", "Boyka"],
  age: [30, 34],
  bio() {
    const bob = `${this.name[0]} is ${this.age[0]} years old`;
    const smith = `${this.name[1]} is ${this.age[1]} years old`;
    return `
      ${bob}
      ${smith}
      `;
  },
  introduceUrSelf() {
    return `HI, I am ${this.name[1]}`;
  },
};

// console.log(person.name);
// console.log(person.bio());
// console.log(person2.bio());
// console.log(person.introduceUrSelf());

const logProperty = (propertyName) => console.log(person2[propertyName]);
// logProperty("name");
// logProperty("age");

const person3 = {
  name: {
    First: "David",
    Last: "Bills",
    "Full Name": "David Bills",
  },
  age: [30, 34],
  bio() {
    const bob = `${this.name[0]} is ${this.age[0]} years old`;
    const smith = `${this.name[1]} is ${this.age[1]} years old`;
    return `
        ${bob}
        ${smith}
        `;
  },
  introduceUrSelf() {
    return `HI, I am ${this.name[1]}`;
  },
};
// console.log(person3.name.First);
// console.log(person3["name"]["Last"]);

person3.profession = "Teacher";
person3.job = function () {
  console.log(
    `${this.name["Full Name"]} is a ${this.profession} by Profession and he is ${this.age[0]} years old `
  );
};
person3["name"]["Full Name"] = "James Mick";
// console.log(person3["profession"]);
// console.log(person3.job());

// Creating a new object using function
const createObj = (name) => {
  const obj = {};
  obj.name = name;
  obj.introduceUrSelf = function () {
    return `Hi i am ${this.name}`;
  };
  return obj;
};
const aliObj = createObj("Ali");
// console.log(aliObj.name);
const silvaObj = createObj("Silva");
// console.log(silvaObj.name);
// console.log(silvaObj.introduceUrSelf());
// console.log(aliObj.introduceUrSelf());

class creatObj {
  constructor(name) {
    this.name = name;
    this.introduceUrSelf = function () {
      return `Hi i am ${this.name}`;
    };
  }
}

const jacksonObj = new creatObj("Jackson");
// console.log(jacksonObj.name);
// console.log(jacksonObj.introduceUrSelf());

// console.log(jacksonObj);
const ownObj = {
  name: "Band Name",
  nationality: "ABC Nationality",
  genre: "Rock Music",
  members: 10,
  formed: 5,
  split: 2020,
  albums: [
    {
      name: "Album 1",
      released: 2020,
    },
    {
      name: "Album 2",
      released: 2021,
    },
    {
      name: "Album 3",
      released: 2022,
    },
  ],
};
const bandInfo = [
  ownObj.name,
  ownObj.nationality,
  ownObj.formed,
  ownObj.genre,
  ownObj.albums[0],
];
// console.log(bandInfo);

const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    // console.log("Meow!");
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};
class Cat {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = function () {
      return `Hello i am ${this.name} the ${this.breed}`;
    };
  }
}
const cat2 = new Cat("ABC", "XYEE", "Black");
// console.log(cat2);
// console.log(Cat.name);

class personObj {
  constructor(name, age, profession, experience) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.experience = experience;
    this.eligable = function () {
      if (this.experience > 5) {
        return `${this.name} is eligable`;
      } else {
        return `${this.name} is not eligable`;
      }
    };
  }
}

const jamalBio = new personObj("Jamal", 26, "Web developer", 2);
// console.log(jamalBio.name);
// console.log(jamalBio.profession);
// console.log(jamalBio.eligable(2));

let personObject = {
  greeting(person) {
    console.log(`Hello ${person}`);
  },
};

let createObject = Object.create(personObject);
createObject.greeting("Ali");
// let personObject = {
//   greeting(prson) {
//     console.log(`Hello ${prson}`);
//   },
// };

// const createObject = Object.create(personObject);

// createObject.greeting("Ali"); // Output: Hello Ali
////////////////////

// OOPS

class professor {
  constructor(name, teaches, grad, inroduceSelf) {
    this.name = name;
    this.teaches = teaches;
    this.introduceSelf = function () {
      console.log(
        `Hello i am ${this.name} and i will teach you ${this.teaches}`
      );
    };
  }
}

const Ali = new professor("Ali", "Urdu");
// console.log(Ali.name);
// Ali.introduceSelf();

class Bio {
  constructor(name, age, education) {
    this.name = name;
    this.age = age;
    this.education = education;
    this.intoduction = function () {
      console.log(
        `Hello i am ${this.name}, My age is ${this.age}, My Education is ${this.education}`
      );
    };
  }
}

const jameelBio = new Bio("Jameel", "26", "B.A");

// jameelBio.intoduction();

class profession {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
}
const jackson = new profession("Jackson", "Teacher");
console.log(jackson.name);

class fullBio extends profession {
  constructor(name, job, fullName, age, city, religion, gender) {
    super(name, job);
    this.age = age;
    this.fullName = fullName;
    this.city = city;
    this.religion = religion;
    this.gender = gender;
    this.fullIntro = function () {
      return `Hello, I am ${this.name} , My profession is ${
        this.job
      } My full Name ${this.fullName}, My age is ${Number(
        this.age
      )}, My city is ${this.city} , My religoin ${
        this.religion
      }, My Gender is ${this.gender}`;
    };
    this.eligable = function () {
      // return this.age > 26;
      let eligability;
      if (this.age > 26) {
        eligability = `Congratulations You are eligable your age is greater than ${this.age}`;
      } else {
        eligability = `You are not eligable because of ${age}`;
      }
      return eligability;
    };
  }
}

const jamal = new fullBio(
  "Jamal",
  "Teacher",
  "Jamal Khan",
  27,
  "Peshawar",
  "Islam",
  "Male"
);
// console.log(jamal.fullName);
// console.log(jamal.fullIntro());
// console.log(typeof jamal.age);
console.log(jamal.eligable());
