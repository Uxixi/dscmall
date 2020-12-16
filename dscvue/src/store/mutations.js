import { MessageBox } from 'mint-ui';
let mutations = {
    changeCategoryLeft(state, data) {
        state.leftLists = data
        // console.log(state);
    },
    changeCategoryRight(state, data) {
        state.rightLists = data
        // console.log(state);
    },
    changeAd(state, data) {
        state.ad = data
        // console.log(state);
    },
    changeCategoryList(state, data) {
        state.categoryList = data
    },
    changedetail(state, data) {
        state.detailDatas = data
    },
    changedetailInfo(state, data) {
        state.detailInfoDatas = data
    },
    changePosterData(state, data) {
        state.posterDatas = data
    },
    setCartDatas(state, data) {
        if (data) {
            state.cartDatas.unshift(data);
        }
        localStorage.setItem("carts", JSON.stringify(state.cartDatas))
    },
    // 点击购物车列表数据的选择框
    changeSelectStatus(state, data) {
        let selectStatus = state.cartDatas.every(item => {
            return item.isSelect == true
        })
        state.selectAll = selectStatus;
        state.cartDatas[data.index] = data.item;
        localStorage.setItem("carts", JSON.stringify(state.cartDatas));
        localStorage.setItem("selectAll", state.selectAll);
        // console.log(data);
        // console.log(state);
    },
    // 点击全选按钮
    changeSelectAllStatus(state) {
        state.selectAll = !state.selectAll;
        state.cartDatas.forEach(item => {
            item.isSelect = state.selectAll;
        });
        localStorage.setItem("carts", JSON.stringify(state.cartDatas))
        localStorage.setItem("selectAll", state.selectAll)
    },
    // 购物车数量加加
    addCart(state, index) {
        state.cartDatas[index].value++;
        localStorage.setItem("carts", JSON.stringify(state.cartDatas))

    },
    jianCart(state, index) {
        if (state.cartDatas[index].value == 1) {
            state.cartDatas[index].value = 1;
        } else {
            state.cartDatas[index].value--;
        }
        localStorage.setItem("carts", JSON.stringify(state.cartDatas))
    },
    deleCart(state, index) {

        MessageBox.confirm('亲，您确定要放弃该宝贝吗?').then(() => {
            console.log("点击了确定按钮");
            state.cartDatas.splice(index, 1);
            localStorage.setItem("carts", JSON.stringify(state.cartDatas));
        }, () => {
            console.log("点击取消了");
        });
        // state.cartDatas[index].value = 1;

    },
    changeSearchList(state, data) {
        if (data) {
            let searchListSelect = state.searchList.some(item => {
                return data == item
            })
            if (!searchListSelect) {
                state.searchList.unshift(data)
            }
        }
        localStorage['searchList'] = JSON.stringify(state.searchList)
    },
    delSearchList(state) {
        // console.log(state);
        state.searchList = []
        localStorage['searchList'] = JSON.stringify(state.searchList)
    },
    changeSetKeyWords(state, data) {
        state.setKeyWords = data;
    },
    changeArticleDetailDate(state, data) {
        state.ArticleDetailDate = data;
    },
    setUserInfo(state, data) {
        state.userInfo = data;
        localStorage['userInfo'] = JSON.stringify(state.userInfo)
    }

}
export default mutations