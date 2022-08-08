const complimentBtn = document.getElementById("complimentButton")

const motivationBtn = document.getElementById("motivationButton")

const display = document.querySelector('.display')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            createDisplay(data)
    });
};

const getMotivation = () => {
    axios.get("http://localhost:4000/api/motivation/")
        .then(res => {
            const data = res.data;
        
    });
};

// const createDisplay = (list)=> {
//     let newList = list.map((x, i) => `<p id='${i}'>${x}</p>`)
//     console.log(newList)
//     display.innerHTML = ''
//     display.innerHTML = newList.join('')
// }

const createDisplay = (list)=> {
    let newList = list.map((x, i) => `<p id='${i}'>${x}</p> <span onClick="deleteItem(${i})">x</span>`)
    console.log(newList)
    display.innerHTML = ''
    display.innerHTML = newList.join('')
}
complimentBtn.addEventListener('click', getCompliment)
motivationBtn.addEventListener('click', getMotivation)

