const TOP_URL = "https://www.amazon.co.jp"

function shortenUrl() {
    let origUrl = document.getElementById("orig_url").value
    let dp = origUrl.match("/dp/[a-zA-Z0-9]*/")
    let gp = origUrl.match("/gp/product/[a-zA-Z0-9]*/")
    if (dp) {
        document.getElementById("short_url").innerText = TOP_URL + dp[0]
    } else if (gp) {
        document.getElementById("short_url").innerText = TOP_URL + gp[0]
    }
}

function copy() {
    let notifyTarget = document.getElementById("notify")
    const copyTarget = document.querySelector('#short_url')

    document.getSelection().selectAllChildren(copyTarget)
    document.execCommand("copy")
    document.getSelection().empty(copyTarget)

    notifyTarget.classList.add('is-show')
    setTimeout(() => {
        notifyTarget.classList.remove('is-show')
    }, 1000)
}
