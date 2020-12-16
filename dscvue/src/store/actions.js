import { getCategoryLeft, getCategoryRight, getCategoryList, getDetail } from "@/api/api"


const actions = {

    // 分类左侧
    async actChangeCategoryLeft(context) {
        let result = await getCategoryLeft();
        // console.log(result.data);
        context.commit("changeCategoryLeft", result.data)
        // console.log(this.state.leftLists);
    },
    // 分类右侧
    async actChangeCategoryRight(context, cat_id) {
        let result = await getCategoryRight(cat_id);
        // console.log(result.data);
        context.commit("changeCategoryRight", result.data);

        let resultLeft = await getCategoryLeft();
        resultLeft.data.forEach(item => {
            if (item.cat_id == cat_id) {
                context.commit("changeAd", item.touch_catads)
            }
        });
        console.log(resultLeft);
    },
    async actChangCategoryList(context, params) {
        let resultList = await getCategoryList(params.url, params.params, params.type);
        context.commit("changeCategoryList", resultList.data);
        // console.log(resultList.data)
        // console.log(params)

    },
    async actChangDetail(context, params) {
        let resultdetail = await getDetail(params.url, params.params, params.type);
        // console.log(resultdetail.data);
        let posterDatas = {
            image: resultdetail.data.goods_thumb,
            title: resultdetail.data.goods_name,
            price: resultdetail.data.shop_price,
            dprice: resultdetail.data.market_price,
        }
        context.commit("changedetail", resultdetail.data);
        context.commit("changedetailInfo", resultdetail.data.basic_info);
        context.commit("changePosterData", posterDatas);
        // console.log(resultdetail);
    },
    async actChangeArticleDetailDate(context, params) {
        let result = await getDetail(params.url, params.params, params.type);
        context.commit("changeArticleDetailDate", result.data)
        // console.log(result.data);
    },
    async setUserInfo(context, data) {
        context.commit("setUserInfo", data)
    }
}

export default actions