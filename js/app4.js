var str = "fflhjklfhjdklshksdjdaskljdalkksjfjklsjkkgjsaklkgjklaklkiorjitymoflkjfjksjlsajhfoiflks";
var arr = [11, 55, 66, 11, 21, 65, 32, 14, 54, 85, 69, 45, 145, 62, 556];
var arr2 = [22, 33, 44, 55, 66, 23, 51, 42, 65, 66, 54, 55, 44, 65, 11];


function onString(str) {
    console.log("***************作业1***************");
    var o = {};
    for (var i = 0, length = str.length; i < length; i++) {
        var char = str.charAt(i);
        if (o[char]) {
            o[char]++;
        } else {
            o[char] = 1;
        }
    }
    // console.log(o);
    var max = 0;
    for (var key in o) {
        if (max < o[key]) {
            max = o[key];
        }
    }
    for (var key in o) {
        if (o[key] == max) {
            console.log("最多的字符是:" + " " + key);
            console.log("出现的次数是:" + " " + max);
        }
    }
    console.log("\n");
}

onString(str);


function arArray(arr) {
    console.log("***************作业2***************");
    console.log("\n");
    var newArr = [];
    console.log("***************数组排序***************");
    console.log("\n");
    arr.sort(function (a, b) {
        return (a - b);
    })
    console.log(arr);
    console.log("\n");

    console.log("***************数组去重***************");
    console.log("\n");
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) newArr.push(arr[i]);
    }
    console.log(newArr);
    console.log("\n");
}

arArray(arr);


