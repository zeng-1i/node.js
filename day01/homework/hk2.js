const fs = require('fs');
const images = require('images');
const path = process.argv.slice(2);
const quality = process.argv.slice(3);

let img = path[0];
let newImg = 'new-' + path[0];
let sum = quality[0].replace('%', '') * 1;

// console.log(img, newImg, sum);
images(img).save(newImg, {quality: sum});

fs.stat(newImg, function(err, stats){
    if(err){
        console.log('文件压缩失败!');
        return console.error(err);
    }
    if(stats.isFile()){
        console.log(`图片压缩为${sum}%成功!`);
    }
})
