const msToMm = {}


function converMsToMm(ms) {
    const min = Math.floor(ms / 60000)
    const sec =  ((ms % 60000/1000).toFixed(0))

    return `${min}:${sec} min.`
}

msToMm.install = function (Vue) {
    Vue.filter('ms-to-mm', (val) => {
        return converMsToMm(val)
    })
}

export default msToMm