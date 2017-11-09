/**
 * Created by lenovo on 2017/11/9.
 */
// 进度条小样式  部分
$(document).ajaxStart(function(){
    NProgress.start();
});

$(document).ajaxStop(function(){
   setTimeout(function(){
       NProgress.done();
   },500);
});

