(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const a = {
    hello: { cvalue: 1 },
    world: {
        cvalue: { yay: { cvalue: '2' } }
    },
    dich: { cvalue: 'a3' }
};
function countValues(countObject) {
    let result = 0;
    Object.keys(countObject).forEach((key) => {
        let value = countObject[key];
        if (typeof value.cvalue == 'number' || typeof value.cvalue == 'string') {
            if (!isNaN(+value.cvalue)) {
                result += +value.cvalue;
            }
            else {
                result += 2021;
            }
        }
        else if (typeof value.cvalue == "object") {
            result += countValues(value.cvalue);
        }
        else if (typeof value.cvalue == 'undefined') {
            result += 2021;
        }
    });
    return result;
}
console.log(countValues(a));
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLE1BQU0sQ0FBQyxHQUFHO0lBQ1IsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtJQUNwQixLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQ0osRUFBRSxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7S0FDM0I7SUFDRCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0NBQ3ZCLENBQUM7QUFVRixTQUFTLFdBQVcsQ0FBQyxXQUF3QjtJQUMzQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBQyxFQUFFO1FBQ3RDLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFJLE9BQU8sS0FBSyxDQUFDLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBUSxLQUFLLENBQUMsTUFBTSxJQUFJLFFBQVEsRUFBQztZQUNwRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDO2dCQUN4QixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBO2FBQUM7aUJBQ3JCO2dCQUNILE1BQU0sSUFBSSxJQUFJLENBQUE7YUFDZjtTQUNKO2FBQUssSUFBSyxPQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksUUFBUSxFQUFDO1lBQ3pDLE1BQU0sSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3BDO2FBQUssSUFBSSxPQUFRLEtBQUssQ0FBQyxNQUFNLElBQUksV0FBVyxFQUFDO1lBQzVDLE1BQU0sSUFBSSxJQUFJLENBQUE7U0FDZjtJQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0YsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGEgPSB7XG4gIGhlbGxvOiB7IGN2YWx1ZTogMSB9LFxuICB3b3JsZDoge1xuICAgIGN2YWx1ZTpcbiAgICAgIHsgeWF5OiB7IGN2YWx1ZTogJzInIH0gfVxuICB9LFxuICBkaWNoOiB7IGN2YWx1ZTogJ2EzJyB9XG59O1xuaW50ZXJmYWNlIFRhc2s1T2JqZWN0IHtcbiAgW2l0ZW06c3RyaW5nXSA6IHVuZGVmaW5lZCB8IElNeUludGVyZmFjZVxufVxuaW50ZXJmYWNlICBJTXlJbnRlcmZhY2V7XG4gIGN2YWx1ZTogVGFzazVUeXBlXG59XG5cbnR5cGUgVGFzazVUeXBlID0gdW5kZWZpbmVkIHwgc3RyaW5nIHwgbnVtYmVyIHwgVGFzazVPYmplY3RcblxuZnVuY3Rpb24gY291bnRWYWx1ZXMoY291bnRPYmplY3Q6IFRhc2s1T2JqZWN0KSB7XG4gIGxldCByZXN1bHQgPSAwO1xuICBPYmplY3Qua2V5cyhjb3VudE9iamVjdCkuZm9yRWFjaCgoa2V5KT0+IHtcbiAgICBsZXQgdmFsdWUgPSBjb3VudE9iamVjdFtrZXldXG4gICAgaWYgKHR5cGVvZiB2YWx1ZS5jdmFsdWUgPT0gJ251bWJlcicgfHwgdHlwZW9mICB2YWx1ZS5jdmFsdWUgPT0gJ3N0cmluZycpe1xuICAgICAgICBpZiAoIWlzTmFOKCt2YWx1ZS5jdmFsdWUpKXtcbiAgICAgICAgICByZXN1bHQgKz0gK3ZhbHVlLmN2YWx1ZX1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ICs9IDIwMjFcbiAgICAgICAgfVxuICAgIH1lbHNlIGlmICggdHlwZW9mIHZhbHVlLmN2YWx1ZSA9PSBcIm9iamVjdFwiKXtcbiAgICAgIHJlc3VsdCArPSBjb3VudFZhbHVlcyh2YWx1ZS5jdmFsdWUpXG4gICAgfWVsc2UgaWYgKHR5cGVvZiAgdmFsdWUuY3ZhbHVlID09ICd1bmRlZmluZWQnKXtcbiAgICAgIHJlc3VsdCArPSAyMDIxXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnNvbGUubG9nKGNvdW50VmFsdWVzKGEpKTtcbiJdfQ==
