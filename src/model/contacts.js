import { getDb } from "../db/connect.js";

const getContacts = async () => {

    const db = getDb()
    const allContacts = await db.collection('contacts').find().toArray()

    if (!allContacts) {
        throw new Error('Not Contacts found')
    }

    return allContacts
}

const getContacById = async (id) => {
    
    const db = getDb()
    const query = { id: id }

    const contact = await db.collection('contacts').find(query).toArray()

    if (!contact) {
        throw new Error(`No contact was found with this ${id} id`)
    }

    return contact[0]
}

export {
    getContacts,
    getContacById
}