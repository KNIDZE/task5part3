const a = {
  hello: { cvalue: 1 },
  world: {
    cvalue:
      { yay: { cvalue: '2' } }
  },
  dich: { cvalue: 'a3' }
};
interface Task5Object {
  [item:string] : undefined | IMyInterface
}
interface  IMyInterface{
  cvalue: Task5Type
}

type Task5Type = undefined | string | number | Task5Object

function countValues(countObject: Task5Object) {
  let result = 0;
  Object.keys(countObject).forEach((key)=> {
    let value = countObject[key]
    if (typeof value.cvalue == 'number' || typeof  value.cvalue == 'string'){
        if (!isNaN(+value.cvalue)){
          result += +value.cvalue}
        else {
          result += 2021
        }
    }else if ( typeof value.cvalue == "object"){
      result += countValues(value.cvalue)
    }else if (typeof  value.cvalue == 'undefined'){
      result += 2021
    }
  })
  return result
}

console.log(countValues(a));
