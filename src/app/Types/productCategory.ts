 type TypeProductCategory = {
    
      cateID : string ,// Khóa chính
     productCateName : string, // Tên danh mục
     slug  : string,// Slug
   sort :number,// Thứ tự ưu tiên
   parentID :number// Danh mục cha
     metaKeyword :string// Hỗ trợ SEO
     metaDescription :string// Hỗ trợ SEO
   createDate : Date, // Ngàu tạo
   updateDate : Date // Ngày cập nhật

}
type TypeProductCategoryDelete = {
    
    slug : string ,// Khóa chính
   productCateName : string, // Tên danh mục
 

}
export {
    TypeProductCategory,
    TypeProductCategoryDelete
}