
module.exports = {
    chooseWeighted(array) {
        let sum = array.reduce((acc, el) => acc + el.weight, 0);
        let acc = 0;
        let chances = array.map(el => (acc = el.weight + acc));
        var rand = Math.random() * sum;
        return array[chances.filter(el => el <= rand).length];
    },

    checkPerms(command, message, bot){
        switch (commands[command].lvl){
            case "author": return msg.author.id === "157689726923571201";
            case undefined: default: return true;
        }
    }
};
