type TypeProducts = {
    productID: string,
    name: string,
    price: number,
    brandID: number,
    brandName: string,
    createBy: number,
    promotionPrice: number,
    createDate: Date,
    updateDate: Date,
    isVat: boolean,
    updateBy: number,
    quantity: number,
    hot: Date,
    description: string,
    metaDescription: string,
    metaKeyword: string,
    detail: string,
    image: string,
    cateID: string,
    listImage: string,
    slug: string,
    viewCount: number,
    supplierid: string,
    supplierAdress: string,
    supplierEmail: string,
    supplierPhone: number,
    categoryName: string,
    isFreeship: boolean,
    PercentPrice: number,
    supplierName: string,
    productCateName: string,
  }
  type TypeProductsCreate = {
    name: string,
  image: string,
  isFreeship: boolean,
  listImage: string,
  price: number,
  promotionPrice: number,
  quantity: number,
  hot: Date,
  content: string,
  description: string,
  viewCount: 0,
  metaKeyword: string,
  metaDescription: string,
  createBy: 0,
  updateBy: 0,
  cateID: string,
  supplierid: string,
  brandID: number
  }
  type TypeProductsEdit = {
    name: string,
  image: string,
  isFreeship: boolean,
  listImage: string,
  price: number,
  promotionPrice: number,
  quantity: number,
  hot: Date,
  content: string,
  description: string,
  viewCount: 0,
  metaKeyword: string,
  metaDescription: string,
  updateBy: 0,
  cateID: string,
  supplierid: string,
  brandID: number
  }
  type sortOption = {
    name: string,
    type: string
  }
  type TyDeleteProduct = {
    slug:string,
    name:string
  }
  type ResultPrododuct = {
    currentPageNumber:number,
    data : TypeProducts[],
    hasNextPage:boolean,
    hasPreviousPage:boolean,
    pageSize:number,
    totalPages:number,
    totalRecords:number

  }
  export {
    TypeProducts, sortOption,TypeProductsCreate,TyDeleteProduct,ResultPrododuct,TypeProductsEdit
  }
  