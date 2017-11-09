/**
 * Created by lenovo on 2017/11/9.
 */

/*表单检验部分*/
$(function(){

    var $form = $('form');
    //console.log($form)

    $form.bootstrapValidator({
        //配置校验时的小图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        //规则
        fields: {
            //对应了表单中的name属性
            username: {
                //写username所有的校验规则
                validators: {
                    notEmpty: {
                        message: "用户名不能为空"
                    },
                    callback:{
                        message:"用户名错误"
                    }
                }
            },
            password: {
                validators:{
                    notEmpty:{
                        message:"密码不能为空"
                    },
                    stringLength:{
                        min:3,
                        max:12,
                        message:"密码长度是6-12位"
                    },
                    callback:{
                        message:"密码错误"
                    }
                }

            }
        }
    });

    $form.on('success.form.bv', function (e) {
        e.preventDefault();

        $.ajax({
           type:"post",
            url:"/employee/employeeLogin",
            data:$form.serialize(),
            success:function (data) {

                if(data.success){
                    // 跳转到首页
                    location.href = "index.html";
                }

                if(data.error === 1000){
                    //alert("用户名不存在");
                    //使用updateStatus方法，主动把username这个字段变成校验失败
                    //第一个参数：字段名  表单中的name属性
                    //第二个参数：INVALID :校验失败
                    //第三个参数：配置提示消息
                    $form.data('bootstrapValidator').updateStatus("username","INVALID","callback");
                }

                if(data.error === 1001){
                    $form.data('bootstrapValidator').updateStatus("password","INVALID","callback");
                }
            }
        });

    });


    //  重置功能部分

   $("[type='reset']").on("click",function(){
       $form.data('bootstrapValidator').resetForm();
   });

});
