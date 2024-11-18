export default class Team {
  constructor(){
    this.charectors = [];
  }

  addCharector(character) {
    this.charectors.push(character);  
  }

  teamList() {
    for (const value of this.charectors) {
      console.log(value);
    }
  }

  teamChars() {
    let i = 0;    

    return {
      next: () => {
        if (i < this.charectors.length) {
          return this.charectors[i++];
        }

        return {
          value: undefined,
          done: true,
        }
      }
    }
  }
}