let usersDB = [];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
    //     let randomIndex = Math.floor(Math.random() * compliments.length);
    //     let randomCompliment = compliments[randomIndex];
      
    //     res.status(200).send(randomCompliment);
    // },
    
    // getMotivation: (req, res) => {
    //     const motivation = ["Happiness begins with facing life with a smile and a wink.", "I learn by going where I have to go.", "Like the river flow into the sea. Something are just meant to be.", "Love is like sweet medicine, good to the last drop.", "Pick battles big enough to matter, small enough to win."];

    //     let randomIndex = Math.floor(Math.random() * motivation.length);
    //     let randomMotivation = motivation[randomIndex];
      
    //     res.status(200).send(randomMotivation);

    let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        usersDB.push(randomCompliment)

        res.status(200).send(randomCompliment);
    },
    
    getMotivation: (req, res) => {
        const motivation = ["Happiness begins with facing life with a smile and a wink.", "I learn by going where I have to go.", "Like the river flow into the sea. Something are just meant to be.", "Love is like sweet medicine, good to the last drop.", "Pick battles big enough to matter, small enough to win."];

        let randomIndex = Math.floor(Math.random() * motivation.length);
        let randomMotivation = motivation[randomIndex];
      
        res.status(200).send(usersDB);
    },

    deleteItem: (req, res) => { 
        console.log(req.params.id)
        const {id} = req.params;
        usersDB.splice(id, 1);
        res.status(200).send(usersDB)
    },

    getLifeMotivation: (req, res) => {
        const quotes =["Be happy!"]
        res.status(200).send(lifeMotivation);
    },

    getStudyMotivation: (req, res) => {
        const quotes =["Be happy!"]
        res.status(200).send(studyMotivation);
    },

    getFunnytMotivation: (req, res) => {
        const quotes =["Be happy!"]
        res.status(200).send(funnyMotivation);
    },
    
    deleteFunnyMotivation: (req, res) => {
        let index = motivation.findIndex(elem => elem.id === +req.params.id)
        movies.splice(index, 1)
        res.status(200).send(funnyMotivation)
    }
    

}
