import { getDb } from "../db/connect.js";

const getContacts = async () => {
    const db = getDb()
    const allContacts = await db.collection('contacts').find().toArray()

    if (!allContacts) {
        throw new Error('No contacts found')
    }

    return allContacts
}

const getContactById = async (id) => {
    const db = getDb()
    const query = { id: id }

    const contact = await db.collection('contacts').find(query).toArray()

    if (!contact || contact.length === 0) {
        throw new Error(`No contact was found with this ${id} id`)
    }

    return contact[0]
}

const createContact = async (contactData) => {
    const db = getDb()
    const lastContact = await db.collection('contacts')
        .find()
        .sort({id: -1})
        .limit(1)
        .toArray()
    const lastId = lastContact.length > 0 ? parseInt(lastContact[0].id, 10) : 3
    const nextId = lastId + 1
    const newContact = {
        ...contactData,
        id: String(nextId < 4 ? 4 : nextId)
    }
    const result = await db.collection('contacts').insertOne(newContact)
    return result
}

const updateContact = async (id, contactData) => {
    const db = getDb()
    const query = { id: id }
    const updatedContact = {
        ...contactData,
        id
    }
    const result = await db.collection('contacts').replaceOne(query, updatedContact)
    return result
}

const deleteContact = async (id) => {
    const db = getDb()
    const query = { id: id }
    const result = await db.collection('contacts').deleteOne(query)
    return result
}

export {
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
}