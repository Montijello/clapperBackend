const express = require('express')
const router = express.Router( {mergeParams: true})
const accountsCtrl = require('../controllers/accounts')
const authCtrl = require('../controllers/auth')

router.get('/', accountsCtrl.getAllAccounts)
router.get('/:accountId', accountsCtrl.getOneAccount)
router.post('/', accountsCtrl.signup, authCtrl.login)

module.exports = router
