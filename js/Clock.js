export default class Clock {

    constructor() {
        this.setTime()
        setInterval(this.setTime, 1000)


        document.getElementById("horloge").style.backgroundImage = "url('../images/tropic.jpg')"
        document.getElementById("horloge").addEventListener("click", this.couleur)

    }

    setTime() {
        let date = new Date()
        let secondes = date.getSeconds() * 6
        let minutes = (date.getMinutes()) * 6
        let heures = (date.getHours()) * 30
        document.getElementById("secondes").style.transform = "rotate(" + secondes + "deg)"
        document.getElementById("minutes").style.transform = "rotate(" + minutes + "deg)"
        document.getElementById("heures").style.transform = "rotate(" + heures + "deg)"
    }

    couleur() {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        let randomColor = "rgb("+ r + "," + g + "," + b + ")"
        let aiguilles = document.querySelectorAll(".aiguille")
        console.log(aiguilles[0])
        for (let i = 0; i < aiguilles.length; i++) {
            aiguilles[i].style.backgroundColor = randomColor
        }
    }
}