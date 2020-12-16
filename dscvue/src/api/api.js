import ajax from "./ajax.js"

const Base_URl = "/api"
const Base_URl2 = "http://localhost:3000/adminapi"
//首页列表
export const getHomeList = (url, params) => {
    return ajax(Base_URl + url, params)
}

// 分类左侧数据
export const getCategoryLeft = () => {
    return ajax(Base_URl + "/catalog/list")
}

// 分类右侧数据
export const getCategoryRight = (cat_id) => {
    return ajax(Base_URl + "/catalog/list/" + cat_id)
}


// 分类列表页
export const getCategoryList = (url, params, type) => {
    return ajax(Base_URl + url, params, type)
}

// 详情页
export const getDetail = (url, params, type) => {
    return ajax(Base_URl + url, params, type)
}

// 货物手机验证码
export const getPhoneCode = (url, params, type) => ajax(Base_URl2 + url, params, type)

// 短信登录
export const getPhoneLogin = (url, params, type) => ajax(Base_URl2 + url, params, type)

//账号登录 
export const getLogin = (url, params, type) => ajax(Base_URl2 + url, params, type)
