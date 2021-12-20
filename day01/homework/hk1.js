const fs = require('fs');
const argv = process.argv.slice(2);
// console.log(argv[0]);

console.log('========== 开始读取目录信息 ==========');

fs.readdir(`${argv}`, function(err, files){
    if(err){
        return console.error(err);
    }
    // console.log(geFileList(`${argv}`));
    files.forEach(file => {
        fs.stat(`${argv+'/'+file}`, function(err,stats){
            if(err){
                return console.error(err);
            }
            if(stats.isFile()){
                console.log(`[${change(stats.size)}]`,file);
            }else if(stats.isDirectory()){
                console.log(`[${change(geFileList(argv+'/'+file))}]`,file);
            }
        })
    })
})
setTimeout(() => {
console.log('========== 读取目录信息完毕 ==========');
}, 50);

function change(limit){
    var size = "";
    if(limit < 0.1 * 1024){                            //小于0.1KB，则转化成B
        size = limit.toFixed(2) + "B"
    }else if(limit < 0.1 * 1024 * 1024){            //小于0.1MB，则转化成KB
        size = (limit/1024).toFixed(2) + "KB"
    }else if(limit < 0.1 * 1024 * 1024 * 1024){        //小于0.1GB，则转化成MB
        size = (limit/(1024 * 1024)).toFixed(2) + "MB"
    }else{                                            //其他转化成GB
        size = (limit/(1024 * 1024 * 1024)).toFixed(2) + "GB"
    }
 
    var sizeStr = size + "";                        //转成字符串
    var index = sizeStr.indexOf(".");                    //获取小数点处的索引
    var dou = sizeStr.substr(index + 1 ,2)            //获取小数点后两位的值
    if(dou == "00"){                                //判断后两位是否为00，如果是则删除00
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
    return size;
}

function geFileList(path)
{
 var filesList = [];
 readFile(path,filesList);
 let totalSize = 0
 for(var i=0;i<filesList.length;i++)
 {
  var item = filesList[i];
  totalSize+=item.size
 }
 return totalSize;
}
 
//遍历读取文件
function readFile(path,filesList)
{
 files = fs.readdirSync(path);//需要用到同步读取
 files.forEach(walk);
 function walk(file)
 { 
  states = fs.statSync(path+'/'+file);   
  if(states.isDirectory())
  {
   readFile(path+'/'+file,filesList);
  }
  else
  { 
   //创建一个对象保存信息
   var obj = new Object();
   obj.size = states.size;//文件大小，以字节为单位
   obj.name = file;//文件名
   obj.path = path+'/'+file; //文件绝对路径
   filesList.push(obj);
  }  
 }
}