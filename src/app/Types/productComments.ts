type TypeProductComments = {
    commentID: string,
    productCommentName: string,
    customer: string,
    customerId: string,
    email: string,
    detail: string,
    createDate: Date,
    updateDate: Date,
    product: string,
    productId: string
}
type TypeProductCommentDelete = {
    slug : string ,// Khóa chính
    email : string, // Tên danh mục
}
export {
    TypeProductComments,TypeProductCommentDelete
}