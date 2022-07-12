$(function(){
    getUserInformation()
    //退出
    $('.backLogin').click(function(){
        layui.layer.confirm('是否退出登录?', {icon: 3, title:'提示'}, function(index){
            localStorage.removeItem('token')
            location.href='../../login.html' 
            layer.close(index);
          });
    })

})

function getUserInformation(){
  
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        // headers:{
        //     Authorization:localStorage.getItem('token')||''
        // },
        success:function(res){
            console.log(res)
            if(res.status!==0){
                return layui.layer.msg('身份认证失败')
            }
            changeImageHeader(res.data)
        },
        complete:function(res){
            console.log(res.responseJSON)
            if(res.responseJSON.status!=0&&res.responseJSON.message=='身份认证失败！'){
                 localStorage.removeItem('token')
                 location.href='../../login.html'
            }
        }
    })
}
function changeImageHeader(user){
    var name =user.nickname || user.username
    $('.welcome').html(name)
   if(user.user_pic!=null){
       $('.layui-nav-img').attr('src',user.user_pic).show()
       $('.text-avater').hide()
   }else{
    $('.text-avater').html(name[0].toUpperCase()).show()
    $('.layui-nav-img').hide()
   }
}