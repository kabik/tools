const TOP_URL = "https://www.amazon.co.jp"

function shortenUrl() {
    let result = TOP_URL + document.getElementById("orig_url").value.match("/dp/[a-zA-Z0-9]*/")[0]
    document.getElementById("short_url").innerText = result
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
