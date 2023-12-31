// 1
// const add = (a,b) => {
//     return a+b;
// }
// export default add;

// 2
// export default (a,b) => {
//     return a+b;
// }

// 3
// const add = (a,b) => {
//     return a+b;
// }
// const sub = (a,b) => {
//     return a-b;
// }
// export default {
//     add,sub
// }

// 4  naming exports must be import with same name

export const add = (a,b) => {
    return a+b;
}
export const sub = (a,b) => {
    return a-b;
}
