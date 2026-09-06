import express from 'express'
import { getAllcontacts, getContactById } from '../controler/contacts.js'

const router = express.Router()

// CONTACTS
const allContacts = router.get('/', getAllcontacts)
const contactById = router.get('/:id', getContactById)

export {
    allContacts,
    contactById
}