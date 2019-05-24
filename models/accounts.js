const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function getOneAccount(accountId){
	return knex('accounts')
	.where({ id: accountId })
	.returning('*')
}

function signup(username, password) {
	return knex('accounts')
	.where({ username })
	.then(([data]) => {
		if (!!data) throw {
			status: 400,
			message: 'username already in use'
		}
		return bcrypt.hash(password, 10)
	})
	.then((hashedPW) => {
		return knex('accounts')
			.insert({ username, password: hashedPW })
			.returning('accounts.username')
	})
}

function getAllAccounts() {
	return knex('accounts')
	.returning('*')
}

module.exports = {
  signup, getOneAccount, getAllAccounts
}
