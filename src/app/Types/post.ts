type TypePostCategory = {

    cateID: string,// Khóa chính
    postCateName: string, // Tên danh mục
    slug: string,// Slug
    sort: number,// Thứ tự ưu tiên
    parentID: number// Danh mục cha
    metaKeyword: string// Hỗ trợ SEO
    metaDescription: string// Hỗ trợ SEO
    createDate: Date, // Ngàu tạo
    updateDate: Date // Ngày cập nhật

}
type TypePostCategoryDelete = {

    slug: string,// Khóa chính
    postCateName: string, // Tên danh mục


}
type TypePosts = {
    postID: string,
    name: string,
    createBy: number,
    content:string,
    createDate: Date,
    updateDate: Date,
    updateBy: number,
    description: string,
    metaDescription: string,
    metaKeyword: string,
    detail: string,
    image: string,
    cateID: string,
    slug: string,
    viewCount: number,
    postCateName: string,
}
type TypePostCreate = {
        name: string,
      image: string,
      content: string,
      description: string,
      viewCount: 0,
      metaKeyword: string,
      metaDescription: string,
      createBy: 0,
      updateBy: 0,
      cateID: string,
      
}
type TyDeletePost = {
    slug:string,
    name:string
}
export {
    TypePostCategory,
    TypePostCategoryDelete,TypePosts,TyDeletePost,TypePostCreate
}