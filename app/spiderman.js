class Spiderman {
    constructor(name, age, actor, movies, studio) {
        this.name = name,
        this.age = age,
        this.actor = actor,
        this.movies = movies,
        this.studio = studio
    }
    // Getter
    get getInfo() {
        return this.salutation();
    }
    // Método
    salutation () {
        return `Hey, I'm ${this.actor} from ${this.studio} studio`
    }
}

module.exports = Spiderman;