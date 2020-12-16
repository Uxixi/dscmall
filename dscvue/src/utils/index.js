export function isWeixin() {
    return navigator.userAgent.toLocaleLowerCase().indexOf("micromessenger") != -1;
}