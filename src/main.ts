
const a: Task5Object = {
  hello: {cvalue: 1},
  world: {
    cvalue:
      {yay: {cvalue: '2'}}
  },
  dich: {cvalue: 'a3'}
};
const obj: Task5Object = {
  mobo: undefined,
  hello: {cvalue: 1},
  world: {
    cvalue:
      {
        yay: {cvalue: "2"},
        grgr: {cvalue: undefined},
        grr: {cvalue: "1q"},
        qq: undefined,
      }
  },
  grgr: {cvalue: undefined}
}
const c = {}
interface Task5Object {
  [item: string]: undefined | { cvalue: Task5Type }
}

type Task5Type = undefined | string | number | Task5Object

function summ(a: Task5Object) {
  const x = Object.keys(a).map((k) => {
    const elem = a[k];
    if (typeof elem === 'undefined' || typeof elem.cvalue === 'undefined') return 2021;
    if (typeof elem.cvalue === 'string') return +elem.cvalue || 2021;
    if (typeof elem.cvalue === "object") return +summ(elem.cvalue);
    return elem.cvalue;
  });
  let sum= 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
}
console.log(summ(c))
