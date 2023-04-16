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
    supplierName: string,
    supplierAdress: string,
    supplierEmail: string,
    supplierPhone: number,
    categoryName: string,
    isFreeship: boolean,
    PercentPrice: number
  }
  type sortOption = {
    name: string,
    type: string
  }
  export {
    TypeProducts, sortOption
  }
  