(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
const a = {
    hello: { cvalue: 1 },
    world: {
        cvalue: { yay: { cvalue: '2' } }
    },
    dich: { cvalue: 'a3' }
};
const obj = {
    mobo: undefined,
    hello: { cvalue: 1 },
    world: {
        cvalue: {
            yay: { cvalue: "2" },
            grgr: { cvalue: undefined },
            grr: { cvalue: "1q" },
            qq: undefined,
        }
    },
    grgr: { cvalue: undefined }
};
const c = {};
function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === 'undefined' || typeof elem.cvalue === 'undefined')
            return 2021;
        if (typeof elem.cvalue === 'string')
            return +elem.cvalue || 2021;
        if (typeof elem.cvalue === "object")
            return +summ(elem.cvalue);
        return elem.cvalue;
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
console.log(summ(c));
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNDQSxNQUFNLENBQUMsR0FBZ0I7SUFDckIsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQztJQUNsQixLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQ0osRUFBQyxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLEVBQUM7S0FDdkI7SUFDRCxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQ3JCLENBQUM7QUFDRixNQUFNLEdBQUcsR0FBZ0I7SUFDdkIsSUFBSSxFQUFFLFNBQVM7SUFDZixLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDO0lBQ2xCLEtBQUssRUFBRTtRQUNMLE1BQU0sRUFDSjtZQUNFLEdBQUcsRUFBRSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUM7WUFDbEIsSUFBSSxFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQztZQUN6QixHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBQ25CLEVBQUUsRUFBRSxTQUFTO1NBQ2Q7S0FDSjtJQUNELElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUM7Q0FDMUIsQ0FBQTtBQUNELE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQU9aLFNBQVMsSUFBSSxDQUFDLENBQWM7SUFDMUIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNqQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVc7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNuRixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRO1lBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO1FBQ2pFLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVE7WUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLEdBQUcsR0FBRSxDQUFDLENBQUM7SUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2I7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG5jb25zdCBhOiBUYXNrNU9iamVjdCA9IHtcbiAgaGVsbG86IHtjdmFsdWU6IDF9LFxuICB3b3JsZDoge1xuICAgIGN2YWx1ZTpcbiAgICAgIHt5YXk6IHtjdmFsdWU6ICcyJ319XG4gIH0sXG4gIGRpY2g6IHtjdmFsdWU6ICdhMyd9XG59O1xuY29uc3Qgb2JqOiBUYXNrNU9iamVjdCA9IHtcbiAgbW9ibzogdW5kZWZpbmVkLFxuICBoZWxsbzoge2N2YWx1ZTogMX0sXG4gIHdvcmxkOiB7XG4gICAgY3ZhbHVlOlxuICAgICAge1xuICAgICAgICB5YXk6IHtjdmFsdWU6IFwiMlwifSxcbiAgICAgICAgZ3Jncjoge2N2YWx1ZTogdW5kZWZpbmVkfSxcbiAgICAgICAgZ3JyOiB7Y3ZhbHVlOiBcIjFxXCJ9LFxuICAgICAgICBxcTogdW5kZWZpbmVkLFxuICAgICAgfVxuICB9LFxuICBncmdyOiB7Y3ZhbHVlOiB1bmRlZmluZWR9XG59XG5jb25zdCBjID0ge31cbmludGVyZmFjZSBUYXNrNU9iamVjdCB7XG4gIFtpdGVtOiBzdHJpbmddOiB1bmRlZmluZWQgfCB7IGN2YWx1ZTogVGFzazVUeXBlIH1cbn1cblxudHlwZSBUYXNrNVR5cGUgPSB1bmRlZmluZWQgfCBzdHJpbmcgfCBudW1iZXIgfCBUYXNrNU9iamVjdFxuXG5mdW5jdGlvbiBzdW1tKGE6IFRhc2s1T2JqZWN0KSB7XG4gIGNvbnN0IHggPSBPYmplY3Qua2V5cyhhKS5tYXAoKGspID0+IHtcbiAgICBjb25zdCBlbGVtID0gYVtrXTtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBlbGVtLmN2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAyMDIxO1xuICAgIGlmICh0eXBlb2YgZWxlbS5jdmFsdWUgPT09ICdzdHJpbmcnKSByZXR1cm4gK2VsZW0uY3ZhbHVlIHx8IDIwMjE7XG4gICAgaWYgKHR5cGVvZiBlbGVtLmN2YWx1ZSA9PT0gXCJvYmplY3RcIikgcmV0dXJuICtzdW1tKGVsZW0uY3ZhbHVlKTtcbiAgICByZXR1cm4gZWxlbS5jdmFsdWU7XG4gIH0pO1xuICBsZXQgc3VtPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICBzdW0gKz0geFtpXTtcbiAgfVxuICByZXR1cm4gc3VtO1xufVxuY29uc29sZS5sb2coc3VtbShjKSlcbiJdfQ==
