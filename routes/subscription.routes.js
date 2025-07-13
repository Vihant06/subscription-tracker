import { Router } from "express";
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js'
import authorize from '../middlewares/auth.middleware.js'

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({title: 'GET all subscription'})
})

subscriptionRouter.get('/:id', (req, res) => {
    res.send({title: 'GET subscriptions details'})
})

subscriptionRouter.post('/', authorize, createSubscription)

subscriptionRouter.put('/', (req, res) => {
    res.send({title: 'UPDATE subscription'})
})

subscriptionRouter.delete('/', (req, res) => {
    res.send({title: 'DELETE subscription'})
})

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions)

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({title: 'CANCEL subscriptions'})
})

subscriptionRouter.get('/upcoming renewals', (req, res) => {
    res.send({title: 'GET upcoming renewals'})
})

export default subscriptionRouter;