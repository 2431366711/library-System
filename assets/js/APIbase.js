$.ajaxPrefilter(function(option){
    option.url = 'http://www.liulongbin.top:3007'+option.url
    //身份认证
    if(option.url.indexOf('/my/')!=-1){
        option.headers={
            Authorization:localStorage.getItem('token')||''
        }
    }
})