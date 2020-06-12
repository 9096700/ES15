let citys1={province:'广东',city:['广州','韶关','深圳']};
let citys2={province:'湖南',city:['长沙','岳阳','衡阳']};
function printCity(citySet){
    console.log(`${citySet.province}省入选城市:`);
    let c=citySet.citys.join(',');
    console.log(c);
}
export {citys1,citys2};
export default printCity;