// 1
// const add = (a,b) => {
//     return a+b;
// }
// module.exports = add;
// 2
// module.exports = (a,b) => {
//     return a+b;
// }

// 3
// const add = (a,b) => {
//     return a+b;
// }
// const sub = (a,b) => {
//     return a-b;
// }

// module.exports={
//     add,sub
// }

// 4
//  module.exports.add = (a,b) => {
//      return a+b;
//  }
//  module.exports.sub = (a,b) => {
//      return a-b;
//  }


// 5

exports.add = (a,b) => {
    return a+b;
}
exports.sub = (a,b) => {
    return a-b;
}