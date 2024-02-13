const homeController = {

    index: (req, res) => {

        const data = {
            now: (new Date()).toLocaleDateString('fr-be')
        };
        res.render('home/index', data);
    },

    contact: (req, res) => {

        res.render('home/contact');
    },

    contactPost: (req, res) => {
        
        // TODO Traiter les données du formulaires
        // TODO Si donnée validé -> Rediriger vers la page index

        res.status(501).send('<h1>Page non terminé...</h1>')
    }
};

module.exports = homeController;