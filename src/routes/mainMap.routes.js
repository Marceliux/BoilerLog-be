const express = require('express')

const indexRoutes = require ('./index.routes')
const authRoutes = require ('./auth.routes')
const citasRoutes = require ('./citas.routes')
const pacientesRoutes = require ('./pacientes.routes')
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.use(authRoutes)
router.use(indexRoutes)
router.use(citasRoutes)
router.use(pacientesRoutes)

module.exports = router
