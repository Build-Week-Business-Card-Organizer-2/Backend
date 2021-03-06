const db = require('../data/db-config');

module.exports = {
    getCards,
    getUserCards,
    getCardById,
    getCardsByOwner,
    addCard,
    updateCard,
    removeCard,
    addCardToCollection,
    removeCardFromCollection
};

// Return all cards from the database

function getCards() {
    return db.select('*').from('cards');
};

function getUserCards(user_id) {
    return db('user_card_connections')
        .where({user_id: user_id})
        .join('cards', 'cards.id', 'user_card_connections.card_id')
}

function getCardById(id) {
    return db('cards')
        .where({id: id})
        .first();
}

function getCardsByOwner(user_id) {
    return db('cards')
        .where({card_owner: user_id})
}

function addCard(card) {
    const user_id = card.card_owner;
    return db('cards').insert(card, 'id')
    .then((ids) => {
        //console.log('id returned after adding card: ',  ids[0]);
        //automatically add card to user's collection
        return addCardToCollection(user_id, ids[0])
            .then(() => {
                return getCardById(ids[0])
            });
    });   
};

function updateCard(newCard, id) {
    return db('cards').where({ id }).update(newCard)
    .then(() => {
        return getCardById(id);
    });
};

function removeCard(card_id) {
    return db('user_card_connections')
        .where({card_id: card_id})
        .del()
        .then(response => {
            return db('cards')
                .where({id: card_id})
                .del();
            })
};

function addCardToCollection(user_id, card_id) {
    return db('user_card_connections')
        .insert({user_id: user_id, card_id: card_id})
        .then(() => {
            return getUserCards(user_id);
        });
};

function removeCardFromCollection(user_id, card_id) {
    return db('user_card_connections')
        .where({
            user_id: user_id,
            card_id: card_id
            })
        .del();
};

