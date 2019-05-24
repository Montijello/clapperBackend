const accountModel = require('../models/accounts')

function signup(req, res, next) {
  const { username, password } = req.body
  if (!username && !password)
    return next({
      status: 400,
      message: 'Username and Password required for creating an account'
    })
  return accountModel.signup(username, password)
    .then(([data]) => {
      if (!data) return next({
        status: 500,
        message: 'Something went wrong. Terribly, terribly wrong...'
      }) 
      next()
    })
    .catch(next)
}

function getOneAccount(req, res, next) {
  return accountModel.getOneAccount(req.params.accountId)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'account not found'
        })
      }
      res.status(200).send(result)
    })
}

function getAllAccounts(req, res, next) {
  return accountModel.getAllAccounts()
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'accounts not found'
        })
      }
      res.status(200).send(result)
    })
}

module.exports = {
  signup, getOneAccount, getAllAccounts
}
