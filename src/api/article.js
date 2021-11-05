import request from "../common/request";

export function getArticleAll(params) {
    return request({
        url: "/get_article",
        method: "get",
        params
    })
}

export function createArticle(data) {
    return request({
        url: "/article/add",
        method: "post",
        data
    })
}