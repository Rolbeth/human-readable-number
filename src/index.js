module.exports = function toReadable (number) {
      const dg0_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const dg20_90 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const tens = (t) => {
        let str = '' + t;
        let y = Number(str.slice(0, 1));
        let x = Number(str.slice(1, 2));
        return x > 0 ? dg20_90[y] + ' ' + dg0_19[x] : dg20_90[y];
    }

    const tens_ed = (e) => +e < 20 ? dg0_19[e] : tens(e);

    const hndrs = (h) => {
        let lns = ('' + h).length;
        let ed = Number(('' + h).slice(lns - 2, lns));
        let stn = ('' + h).slice(0, lns - 2);
        let sed = ed > 0 ? ' ' + tens_ed(ed) : '';
        return dg0_19[stn] + ' hundred' + sed;
    }

    let res = '';
    const n = number;

    if (n < 100) {
        res = tens_ed(n);
    }
    else if (n < 1000) {
        res = hndrs(n);
    }
    else {
        res = 'out of range';
    }

    return res;
}
