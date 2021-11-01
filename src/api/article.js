import request from "../common/request";

export function getArticleAll() {
    return request({
        url: "/get_article",
        method: "get"
    })
}