// 主要存数据
const state = {
    leftLists: [],
    rightLists: [],
    cat_id: 858,
    ad: "",
    categoryList: [],
    detailDatas: {},
    detailInfoDatas: {},
    posterDatas: {},
    // 购物车数据---本地存储
    // 如果本地存储有carts属性，读取本地存储数据转换成json对象，否则将cartDatas等于一个空数组
    cartDatas: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    // 全选
    selectAll: localStorage["selectAll"] ? JSON.parse(localStorage["selectAll"]) : false,
    searchList: localStorage["searchList"] ? JSON.parse(localStorage["searchList"]) : [],
    setKeyWords: "",
    // /article/show
    ArticleDetailDate: {},
    userInfo: localStorage["userInfo"] ? JSON.parse(localStorage["userInfo"]) : {},
}

export default state