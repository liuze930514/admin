function buyToiletries(money) {
    console.log("***************作业1***************");
    var xBottle = parseInt(money / 15);
    var ySupport = parseInt(money / 5);
    var zPiece = parseInt(money / 2);
    for (var x = 1; x <= xBottle; x++) {
        for (var y = 1; y <= ySupport; y++) {
            for (var z = 1; z <= zPiece; z++) {
                if ((15 * x + 5 * y + z * 2) == money) {
                    console.log("洗发水" + " " + x + " " + "瓶");
                    console.log("牙刷" + " " + y + " " + "把");
                    console.log("香皂" + " " + z + " " + "块");
                    console.log("\n");
                }
            }
        }
    }
}

buyToiletries(100);


function triangle(level) {
    console.log("***************作业2.1***************");
    for (var i = 1; i <= level; i++) {
        var space = level - i;
        var str = "";
        for (var j = 1; j <= level; j++) {
            if (j <= space) {
                str += "";
            } else {
                str += "●" + " ";
            }
        }
        console.log(str);
    }
    console.log("\n");
}

triangle(5);




function invertedTriangel(level) {
    console.log("***************作业2.2***************");
    for (var i = 0; i <= level; i++) {
        var space = level - i;
        var str = "";
        for (var j = 1; j <= level; j++) {
            if (j <= space) {
                str += "●" + " ";
            } else {
                str += "";
            }
        }
        console.log(str);
    }
    console.log("\n");
}

invertedTriangel(5);


function beggingPeach() {
    console.log("***************作业3***************");
    var peache = 1;
    for (var time = 1; time <= 6; time++) {
        peache = (peache + 1) * 2;
    }
    console.log("公园里刚开始有" + peache + "个桃子");
    console.log("\n");
}

beggingPeach();


function gatherMoney() {
    console.log("***************作业4***************");
    for (var i = 0; i <= 20; i++) {
        for (var x = 0; x <= 10; x++) {
            for (var y = 0; y <= 4; y++) {
                if (i + 2 * x + 5 * y == 20) {
                    console.log("1元:" + i + " " + "张");
                    console.log("2元:" + x + " " + "张");
                    console.log("5元:" + y + " " + "张");
                    console.log("\n");
                }
            }
        }
    }
    console.log("**********共有29种可能**********");
    console.log("\n");
}

gatherMoney();


function factorial() {
    console.log("***************作业5***************");
    var sum = 1;
    for (var i = 1; i <= 5; i++) {
        sum = sum * i;
    }
    console.log("5的阶乘 5!的结果是:" + " " + sum);
    console.log("\n");
}

factorial();


function buyChicken(money) {
    console.log("***************作业6***************");
    var cockOnly = parseInt(money / 5);
    var henOnly = parseInt(money / 3);
    var chickOnly = parseInt(money / (1 / 3));
    for (var cock = 0; cock <= cockOnly; cock++) {
        for (var hen = 0; hen <= henOnly; hen++) {
            for (var chick = 0; chick <= 100; chick++) {
                if ((5 * cock + 3 * hen + chick / 3) == money && (cock + hen + chick) == money) {
                    console.log("公鸡有" + " " + cock + " " +"只");
                    console.log("母鸡有" + " " + hen + " " +"只");
                    console.log("雏鸡有" + " " + chick + " " +"只");
                    console.log("\n");
                }
            }
        }
    }
}

buyChicken(100);


function name() {
    var girlFriend = {}
}