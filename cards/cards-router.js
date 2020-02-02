const express = require('express');
const restricted = require('../auth/auth-middleware.js');
const Cards = require('./cards-model.js');

const router = express.Router({
    mergeParams: true
});

module.exports = router;

/*
GET api/cards 
Gets all cards in the database */

router.get('/', (req, res) => {
    Cards.getCards()
    .then(cards => {
        res.status(200).json(cards)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to retrieve cards'
        });
    });
});


/* GET api/cards/:id/collection
Gets all cards in a user’s collection */

router.get('/:id/collection', (req, res) => {
    const id = req.params.id;
    Cards.getUserCards(id)
        .then(cards => {
            res.status(200).json(cards)
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: `Failed to retrieve card collection for user with id ${id}`
            });
        });
});

/* POST api/cards
Adds a card to the database */

router.post('/', (req, res) => {
    const newCard = req.body;

    Cards.addCard(newCard)
    .then(card => {
        //console.log('Success!', res)
        res.status(201).json(card)
        
    })
    .catch(err => {
        //console.log('err in catch:', err);
        res.status(500).json({
            error: err,
            message: 'Failed to add card'
        });
    });
});

/* PUT api/cards/:id
Updates a card’s info */
router.put('/:id', (req, res) => {
    const id = req.params.id;
    Cards.updateCard(req.body, id)
        .then(card => {
            res.status(200).json(card);
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: `Failed to update card with id ${id}`
            });
        });
});

/* DELETE api/cards/:id
Removes a card from the database */

router.delete('/:id', (req, res) => {
    const  id = req.params.id

    Cards.removeCard(id)
    .then(del => {
        if(del) {
            res.status(200).json({
                message: `Successfully deleted card of ${id}`
            })
        }
        else {
            res.status(404).json({
                message: 'Could not find card associated with that id'
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err,
            message: 'Failed to delete the card'
        });
    });
});

/* POST api/cards/:user_id/:card_id
Adds a card to the user’s collection */

router.post('/:user_id/:card_id', (req, res) => {
    const user_id = req.params.user_id;
    const card_id = req.params.card_id;
    Cards.addCardToCollection(user_id, card_id)
        .then(cards => {
            res.status(201).json(cards);
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: `Failed to add card of id ${card_id} to collection of user ${user_id}`
            });
        });
});

/* DELETE api/cards/:user_id/:card_id
Removes a card from the user’s collection (not the entire database)
*/

router.delete('/:user_id/:card_id', (req, res) => {
    const user_id = req.params.user_id;
    const card_id = req.params.card_id;
    Cards.removeCardFromCollection(user_id, card_id)
        .then(response => {
            res.status(200).json({message: `Deleted card of id ${card_id} from collection of user ${user_id}` })
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message:  `Failed to delete card of id ${card_id} from collection of user ${user_id}`
            });
        });  
});