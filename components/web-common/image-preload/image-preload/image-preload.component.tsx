// 预加载图片
export default (pictureUrls: Array<string>, callback: ()=>void) => {
    let loaded: number = 0

    for (let i = 0, j = pictureUrls.length; i < j; i++) {
        (function (img: any, src: string) {
            img.onload = function () {
                if (++loaded == pictureUrls.length && callback) {
                    callback()
                }
            }
            img.src = src
        }(new Image(), pictureUrls[i]))
    }
}