function closeDoc(){
    document.getElementById('doc').style.display = 'none'
}
function print(...arg) {
    console.log(arg)
}
var cart = {}

function increment(outputId) {
    var outputText = Number(document.getElementById(outputId).innerText)
    var outputElem = document.getElementById(outputId)
    outputElem.innerText = outputText + 1
    cart[outputId] = outputText + 1
    console.log(cart)
    console.log('cart updated')
}

function decrement(outputId) {
    var outputText = Number(document.getElementById(outputId).innerText)
    var outputElem = document.getElementById(outputId)
    outputElem.innerText = outputText - 1
    cart[outputId] = outputText - 1
    console.log(cart)
}

function saveToLocal() {
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log("Data Saved Successfully.")
    alert('Data Saved successfully!!')
}

function getLocalCartData() {
    var retrieveCart = localStorage.getItem('cart')
    if (retrieveCart[0] == 'N') {
        console.log('No Data Found...')
    } else {
        var usableCart = JSON.parse(retrieveCart)
        console.log(usableCart)
    }
    console.log('⬆️ This was the saved data ⬆️')
}

function resetCart() {
    localStorage.setItem('cart', 'No Data Found..')
    alert("Data Cleared!")
}

function setData(outputId,data){
    var outputText = Number(document.getElementById(outputId).innerText)
    var outputElem = document.getElementById(outputId)
    outputElem.innerText = data
}
function loadPriviousData(){
    var retrieveCart = localStorage.getItem('cart')
    if (retrieveCart[0] == 'N') {
        
    } else {
        var usableCart = JSON.parse(retrieveCart)
        for (var j in usableCart){
            setData(j,usableCart[j])
        }
    }
}
