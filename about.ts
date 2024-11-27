interface about {
  name: string;
  age: number;
  location: string;
  github: string;
  stackoverflow: string;
}

class about_me {
  information: about;

  constructor() {
    const date = new Date();
    const bdate = new Date(2001, 3, 27);

    this.information = {
      name: "Ryann Kim Sesgundo",
      age: date.getFullYear() - bdate.getFullYear(),
      location: "Lucena City, Philippines",
      github: "RyannKim327",
      stackoverflow: "RyannKim327",
    };
  }

  getAbout() {
    return this.information;
  }
}

let RyannKim327 = new about_me();
const info = RyannKim327.getAbout();
for (let category of Object.keys(info) as Array<keyof typeof info>) {
  console.log(
    `${category}:\t${category.length < 7 ? "\t" : ""} ${info[category]}`,
  );
}
