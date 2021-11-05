import request from "../common/request";

export function getPictureAll(params) {
    return request({
        url: "/pictures",
        method: "get",
        params
    })
}