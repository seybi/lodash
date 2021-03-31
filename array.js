const _ = require('lodash');

let arr = ['a', 'b', 'c', 'd'];

const chunk = function (array, size) {
    let newArr = [];
    let s = 1;
    let arr = [];
    if (size === undefined) {
        size = 1;
    } else if (size < 0) {
        return newArr;
    }

    for (let i = 0; i < array.length; i++) {
        if (s <= size) {
            arr.push(array[i]);
        } else {
            newArr.push(arr);
            arr = [];
            arr.push(array[i]);
            s = 1;
        }
        s++;
    }
    newArr.push(arr);

    return newArr;
};
//console.log(_.chunk(['a', 'b', 'c', 'd', 'e'], 2));
//console.log(chunk(['a', 'b', 'c', 'd', 'e'], 2));

const compact = function (array) {
    let arr = [];
    array.forEach(e => {
        if (e !== 0 && e !== '' && e !== ' ' && e !== undefined && e !== NaN && e !== NaN && e !== false) {
            arr.push(e);
        }
    });

    return arr;
};
// console.log(_.compact([0, 1, false, 2, '', 3]));
// console.log(compact([0, 1, false, 2, '', 3]));

const concat = function (...args) {
    let arr = [];
    args.forEach(e => {
        if (Array.isArray(e)) {
            e.forEach(el => {
                arr.push(el);
            })
        } else {
            arr.push(e);
        }
    })
    return arr;
}

// var array = [1];
// var other = _.concat(array, 2, [3, 4], [[4]], {});
// console.log(other);

// var other2 = concat(array, 2, [3, 4], [[4]], {});
// console.log(other2);

const difference = function (array, value) {
    array.forEach((e, i) => {
        value.forEach(el =>{
            if (e === el) {
                array.splice(i, 1);    
            }
        })
    })
    return array;
};

// console.log(_.difference([2, 1,5], [2,3]));
// console.log(difference([2, 1,5], [2,3]));

const drop = (array, n = 1) => {
    return array.slice(n);
};

// console.log( drop([1, 2, 3], 0) );

const dropRight = (array, n = 1) => {
    for (let i = 0; i < n; i++) {
        array.pop();
    };

    return array;
};

// console.log(dropRight([1, 2, 3]));