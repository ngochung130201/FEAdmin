type TypeContact = {
    contactId: number,
    name: string,
    email:string,
    phone: string,
    address: string,
    subject: string,
    body: string,
    createDate:Date
}
type TypeContactDelete = {
    name: string,
    contactId: number,
}
export {
    TypeContact, TypeContactDelete
}