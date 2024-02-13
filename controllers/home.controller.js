const homeController = {

    index: (req, res) => {
        
        res.send('<h1>Index</h1>');
    },

    contact: (req, res) => {

        res.send('<h1>Formulaire de contact...</h1>');
    },

    contactPost: (req, res) => {
        
        // TODO Traiter les données du formulaires
        // TODO Si donnée validé -> Rediriger vers la page index

        res.status(501).send('<h1>Page non terminé...</h1>')
    }
};

module.exports = homeController;