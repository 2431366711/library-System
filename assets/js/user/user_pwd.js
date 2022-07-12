$(function(){
    var form =layui.form
    form.verify({
        changePssword:function(value){
            if(value===$('[name=oldPwd]').val()){
                return '新密码和旧密码相同，不能更改'
            }
        },
        rePwd:function(value){
            if(value!==$('[name=newPwd]').val()){
                return '两次密码不同'
            }
        }
    })

    $('.layui-form').on('submit',function(e){
        e.preventDefault();
        
        $.ajax({
            method:'Post',
            url:'/my/updatepwd',
            data:$(this).serialize(),
            success:function(res){
                console.log(res)
                if(res.status!=0){
                    return layui.layer.msg('修改失败')
                }
                layui.layer.msg('修改成功')
            }
        })
    })
})