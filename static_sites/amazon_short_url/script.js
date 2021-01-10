const TOP_URL = "https://www.amazon.co.jp"

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("orig_url").focus()
});

const getShortUrl = () => {
    let origUrl = document.getElementById("orig_url").value
    let dp = origUrl.match("/dp/[a-zA-Z0-9]*/")
    let gp = origUrl.match("/gp/product/[a-zA-Z0-9]*/")

    if (dp) {
        return TOP_URL + dp[0]
    } else if (gp) {
        return TOP_URL + gp[0]
    }
}

const shortenUrl = () => {
    let shortUrl = getShortUrl()
    let target = document.getElementById("short_url")
    target.href = shortUrl
    target.innerHTML = shortUrl
}

const copy = () => {
    let notifyTarget = document.getElementById("notify")
    let copyTarget = document.querySelector('#short_url')

    document.getSelection().selectAllChildren(copyTarget)
    document.execCommand("copy")
    document.getSelection().empty(copyTarget)

    notifyTarget.classList.add('is-show')
    setTimeout(() => {
        notifyTarget.classList.remove('is-show')
    }, 1000)
}
