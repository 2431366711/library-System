$(function(){
   getUserInfo() 
   
   layui.form.verify({
    nickname:function(value){
       if(value.length>6){
        return '昵称长度在1-6之间'
       }
    }
   })
  
   
   $('#reset').click(function(e){
    e.preventDefault()
    getUserInfo()
   })
   $('#submitbtn').click(function(e){
    var data = $('.layui-form').serialize()
    console.log(data)
    e.preventDefault()
    postFormInformation(data)
    window.parent.getUserInformation()
   })
})
function getUserInfo(){
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        success:function(res){
            if(res.status!=0){
                return layui.layer.msg('获取失败')
            }
            layui.form.val('formUserInfo',res.data)
        }
    })
}
function postFormInformation(data){
    $.ajax({
        method:'post',
        url:'/my/userinfo',
        data:data,
        success:function(res){
            if(res.status!=0){
                return layui.layer.msg('提交失败')
            }
            layui.layer.msg('提交成功')
        }
    })
}