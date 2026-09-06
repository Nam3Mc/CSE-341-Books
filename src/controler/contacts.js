import { getContacById, getContacts } from "../model/contacts.js"

export const getAllcontacts = async (req, res) => {
    try {
        const allContacts = await getContacts()
        return res.status(200).json(allContacts)
    } catch (error) {
        console.error('Error in getAllcontacts controler')
        return res.status(500).json({error: 'Error getting all contacts'})
    }
}

export const getContactById = async (req, res) => {
    try {
        const id = req.params.id
        const contact = await getContacById(id)
        return res.status(200).json(contact)
    } catch (error) {
        console.error('Error in getContactById controler')
        return res.status(500).json({error: 'Error getting contact by id'})
    }
}