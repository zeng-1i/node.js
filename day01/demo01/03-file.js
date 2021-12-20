var fs = require('fs');

/* // 同步读取文件
var data = fs.readFileSync('input.txt');
console.log('同步读取', data.toString());

// 异步打开文件
console.log('准备打开文件');
fs.open('input.txt', 'r+', function(err, fd){
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功!');
})

console.log('程序执行完毕!');

// 获取文件信息
console.log("准备打开文件!");
fs.stat('/Users/merle/Desktop/node/day01/demo01/input.txt', function(err, stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log('读取文件信息成功!');
    // 检测文件类型 
    console.log('是否为文件?', stats.isFile());
    console.log('是否为目录?', stats.isDirectory());
}) */


/* // 写入文件
console.log('准备写入文件!');
fs.writeFile('input.txt', '我是通过 writeFile 写入文件的内容', function(err){
    if(err){
        return console.error(err);
    }
    console.log('数据写入成功!');
    console.log('==========手动分割线==========');
    console.log('开始读取文件!');
    fs.readFile('input.txt', function(err, data){
        if(err){
            return console.error(err);
        }
        console.log('异步读取的数据: ' + data.toString());
        console.log('数据读取完毕!');
    })
}) */

/* // 读取文件
var buf = new Buffer.alloc(256);
console.log('准备打开已存在的文件!');

fs.open('input.txt', function(err, fd){
   if(err){
       return console.error(err);
   }
   console.log('文件打开成功!');
   console.log('准备读取文件!');
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
       if(err){
           return console.error(err);
       }
       console.log(bytes + '字节被读取!');
        // 仅输出读取的字节:
       if(bytes > 0){
           console.log(buf.slice(0, bytes).toString());
       }
   })
}) */

/* // 关闭文件
var buf = new Buffer.alloc(1024);

console.log('准备打开文件!');
fs.open('input.txt', 'r+', function(err, fd){
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功!');
    console.log('准备读取文件: ');
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if(err){
            return console.error(err);
        }
        // 仅输出读取的字节
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }
        // 关闭文件
        fs.close(fd, function(err){
            if(err){
                return console.error(err);
            }
            console.log('文件关闭成功!');
        })
    })
}) */

/* // 截取文件
var buf = new Buffer.alloc(1024);
console.log('准备打开文件!');

fs.open('input.txt', 'r+', function(err, fd){
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功!');
    console.log('截取5字节内的内容,超出部分将被去除!');

    // 截取文件
    fs.ftruncate(fd, 5, function(err){
        if(err){
            console.error(err);
        }
        console.log('文件截取成功!');
        console.log('读取相同的文件!');
    })
    // 读取文件
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if(err){
            console.error(err);
        }
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }
        // 关闭文件
        fs.close(fd, function(err){
            if(err){
                return console.error(err);
            }
            console.log('关闭文件成功!');
        })
    })
}) */

/* // 删除文件
console.log('准备删除文件!');
fs.unlink('del.txt', function(err) {
    if(err){
        return console.error(err);
    }
    console.log('文件删除成功!');
}) */

/* // 创建目录
console.log('创建目录: demo01/test');
fs.mkdir('/Users/merle/Desktop/node/day01/test', function(err){
    if(err){
        return console.error(err);
    }
    console.log('test目录创建成功!');
}) */

/* // 读取目录
console.log('查看 demo01 目录: ');
fs.readdir('/Users/merle/Desktop/node/day01/demo01', function(err, files){
    if(err){
        return console.error(err);
    }
    files.forEach(file => {
        console.log(file);
    })
}) */

/* // 删除目录
console.log('删除day01下的test目录');
fs.rmdir('/Users/merle/Desktop/node/day01/demo01/test', function(err){
    if(err){
        return console.error(err);
    }
    console.log('读取 day01 目录:');
    fs.readdir('/Users/merle/Desktop/node/day01', function(err, files){
        if(err){
            return console.error(err);
        }
        files.forEach(file => {
            console.log(file);
        })
    })
    console.log('删除成功!');
}) */