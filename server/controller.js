module.exports = {

    // getCompliment: (req, res) => {
    //     const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
    //     // choose random compliment
    //     let randomIndex = Math.floor(Math.random() * compliments.length);
    //     let randomCompliment = compliments[randomIndex];
      
    //     res.status(200).send(randomCompliment);
    // },
    
    getMotivation: (req, res) => {
        const motivation = ["Happiness begins with facing life with a smile and a wink.", "I learn by going where I have to go.", "Like the river flow into the sea. Something are just meant to be.", "Love is like sweet medicine, good to the last drop.", "Pick battles big enough to matter, small enough to win."];

        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
}