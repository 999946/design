import * as request from 'superagent'

export const post = async <T>(url: string, params?: any) => {
    const result = await request.post(url).send(params)
    const body = result.body as Http.Response<T>

    // 处理错误情况
    if (!body) {
        return {} as T
    }

    if (body.errno !== 0) {
        console.warn(body.errmsg)
        return {} as T
    }

    return body.data as T
}

export const get = async <T>(url: string, params?: any) => {
    const result = await request.get(url).query(params)
    const body = result.body as Http.Response<T>

    // 处理错误情况
    if (!body) {
        return {} as T
    }

    if (body.errno !== 0) {
        console.warn(body.errmsg)
        return {} as T
    }

    return body.data as T
}