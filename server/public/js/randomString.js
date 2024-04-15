module.exports.randomString = (length)=>{
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234 56789";
    let result = "";
    for (let i=0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return result;
}