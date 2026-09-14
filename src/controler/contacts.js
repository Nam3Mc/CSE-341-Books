import {
    getContacts,
    getContactById as getContactByIdModel,
    createContact as createContactModel,
    updateContact as updateContactModel,
    deleteContact as deleteContactModel
} from "../model/contacts.js"

export const getAllContacts = async (req, res) => {
    try {
        const allContacts = await getContacts()
        return res.status(200).json(allContacts)
    } catch (error) {
        console.error('Error in getAllContacts controller')
        return res.status(500).json({ error: 'Error getting all contacts' })
    }
}

export const getContactById = async (req, res) => {
    try {
        const id = req.params.id
        const contact = await getContactByIdModel(id)
        return res.status(200).json(contact)
    } catch (error) {
        console.error('Error in getContactById controller')
        return res.status(500).json({ error: 'Error getting contact by id' })
    }
}

export const createContact = async (req, res) => {
    try {
        const contactData = req.body
        const result = await createContactModel(contactData)
        return res.status(201).json(result)
    } catch (error) {
        console.error('Error in createContact controller')
        return res.status(500).json({ error: 'Error creating contact' })
    }
}

export const updateContact = async (req, res) => {
    try {
        const id = req.params.id
        const contactData = req.body
        const result = await updateContactModel(id, contactData)
        return res.status(200).json(result)
    } catch (error) {
        console.error('Error in updateContact controller')
        return res.status(500).json({ error: 'Error updating contact' })
    }
}

export const deleteContact = async (req, res) => {
    try {
        const id = req.params.id
        const result = await deleteContactModel(id)
        return res.status(200).json(result)
    } catch (error) {
        console.error('Error in deleteContact controller')
        return res.status(500).json({ error: 'Error deleting contact' })
    }
}