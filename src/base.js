exports.install = function (Vue, options) {
  Vue.prototype.changeData = function (){
    alert('执行成功,测试全局方法');
  };

  //ajax请求
  Vue.prototype.getAjaxRequest = function (type, url, data, async, succFunc, errFunc) {
    $.ajax({
      type: type,
      url: url,
      //contentType: "application/json; charset=utf-8",
      data: data,
      dataType: 'json',
      xhrFields:{
        withCredentials:true
      },
      traditional: true,
      crossDomain: true,
      cache:true,
      async: async,
      success: function (json) {
        succFunc(json)
      },
      error: errFunc
    })
  }

};
