;$(function(){
   $('.loginbox a').click(function(){
    $(this).parent().parent().addClass('displayed').siblings().removeClass('displayed')
   })
   $('.Regbox a').click(function(){
    $(this).parent().parent().addClass('displayed').siblings().removeClass('displayed')
   }) 
   var form = layui.form
   form.verify({
    username:function(value, item){
       if(value === ''){
        return '用户名不能为空'
       }
    },
    pwd:[/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    repwd:function(value){
        if(value!=$('.Regbox [name=password]').val()){
            return '两次密码不一致'
        }
    }
   })
//注册事件 ajax调用
   $('.Regbox #loginform').on('submit',function(e){
      e.preventDefault();
      var data ={
         username:$('.Regbox [name=username]').val(),
         password:$('.Regbox [name=password]').val()
      }
      console.log(data)
      // console.log($('.Regbox [name=username]').val())
      $.post('/api/reguser',data,function(res){
        console.log(res)
        if(res.status!=0){
         return layer.msg('用户名被占用，请更换其他用户名')
        }
      })
   })

//登录调用事件
   $('.loginbox #loginform').on('submit',function(e){
      e.preventDefault()
      var data ={
         username:$('.loginbox [name=username]').val(),
         password:$('.loginbox [name=password]').val()
      }
      $.post('/api/login',data,function(res){
         console.log(res)
         if(res.status!=0){
            return layer.msg('登录失败')
         }
         window.localStorage.setItem('token',res.token)
         layer.msg('登录成功')
         localStorage.setItem('token',res.token)
         location.href='../../index.html'
      })
   })
})
