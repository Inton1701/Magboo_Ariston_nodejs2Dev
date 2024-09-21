const animal = {
    anim:(req, res) => {
        res.render('index');
    },
    dog:(req, res)=>{
        res.render('animal', {sound: 'Dog says: Aww aww'});
    },
    cat:(req, res)=>{
        res.render('animal', {sound: 'Cat says: meow meow'});
    },
    lion:(req, res)=>{
        res.render('animal', {sound: 'Lion says: roar roar!!!'});
    },
    cow:(req, res)=>{
        res.render('animal', {sound: 'Cow says: moooh mooh!!!'});
    },
    goat:(req, res)=>{
        res.render('animal', {sound: 'Goat says: mweehhh mweehh!!!'});
    }
}
module.exports = animal;