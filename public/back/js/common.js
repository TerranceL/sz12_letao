/**
 * Created by lenovo on 2017/11/9.
 */
// ������С��ʽ  ����
$(document).ajaxStart(function(){
    NProgress.start();
});

$(document).ajaxStop(function(){
   setTimeout(function(){
       NProgress.done();
   },500);
});

