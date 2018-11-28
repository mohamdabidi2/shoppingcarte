
let heart = Array.from(document.querySelectorAll('.heart-c'))
for (let x of heart) {
    x.addEventListener('click', (e) => {
        e.target.classList.toggle('heart-color')
    })
}
let remove = Array.from(document.querySelectorAll('.remove'))

for (let y of remove) {
    y.addEventListener('click', (e) => {
     
        e.target.parentElement.parentElement.remove(e.target)

        sum()

    })
}


let plus = document.getElementsByClassName('lp')
let moins = document.getElementsByClassName('pl')
let pr = [1000, 2000, 3000]



for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', (e) => {

        let y = e.target.nextElementSibling

        y.innerText = +y.innerText + 1
        let t = e.target.parentElement.nextElementSibling

        t.innerText = +t.innerText + pr[i]
        sum()

    })
}

for (let j = 0; j < moins.length; j++) {

    moins[j].addEventListener('click', (e) => {


        let r = e.target.previousElementSibling

        if (r.innerText > 0) {

            r.innerText = +r.innerText - 1

            let t = e.target.parentElement.nextElementSibling

            t.innerText = +t.innerText - pr[j]


            sum()
        }

    })

}
function sum() {
    let element = 0;
    let sum = document.getElementById('sum')
    let prix = Array.from(document.querySelectorAll('.prix'))
    for (let x = 0; x < prix.length; x++) {
        element += Number(prix[x].innerText);
        sum.innerText = element + "$"
    }
}












