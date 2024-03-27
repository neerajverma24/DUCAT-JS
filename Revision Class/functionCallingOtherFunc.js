function cutPieces(fruits) {
    return fruits * 2
}
console.log("cutpieces : ", cutPieces(5))

function fruitProcessor(apples, oranges) {
    let applePieces = this.cutPieces(apples)
    let orangePieces = this.cutPieces(oranges)

    const juice = `juice is having ${applePieces} apple pieces, and ${orangePieces} orange pieces..`
    return juice;
}
console.log("fruitProcessor : ", fruitProcessor(4, 5));  // if the passes two parameters , we have to pass the argument in the form of commas...