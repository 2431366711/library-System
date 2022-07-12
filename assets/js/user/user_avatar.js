$(function(){
  var  $image = $('#image')
  const options = {
    // 纵横比
    aspectRatio: 1,
    // 指定预览区域
    preview: '.img-preview'
  }
  // 1.3 创建裁剪区域
  $image.cropper(options)
  
  //上传文件图片
  $('#btnChooseImage').click(function(){
    $('#file').click()
  })
  $('#file').on('change',function(e){
    console.log(e.target.files)
    var filter = e.target.files
    if(filter.length==0){
        return layui.layer.msg('请选择照片')
    }
    var imgURL =URL.createObjectURL(filter[0]) 
    console.log(imgURL)
    $image
      .cropper('destroy') // 销毁旧的裁剪区域
      .attr('src', imgURL) // 重新设置图片路径
      .cropper(options) // 重新初始化裁剪区域
  })

  $('#btnUpload').click(function(){
    var dataURL = $image
    .cropper('getCroppedCanvas', {
      // 创建一个 Canvas 画布
      width: 100,
      height: 100
    })
    .toDataURL('image/png')

    $.ajax({
        method:'post',
        url:'/my/update/avatar',
        data:{
            avatar:dataURL
        },
        success:function(res){
            if(res.status!=0){
                return layui.layer.msg('提交失败')
            }
            layui.layer.msg('提交成功')
            window.parent.getUserInformation()
        }
    })
  })
})