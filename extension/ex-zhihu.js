;(function(){
    var _url = window.location.href;
    if(_url == 'https://www.zhihu.com/'){
        // 首页
        var answersContainers = document.getElementsByClassName('zm-item-rich-text');
        if(answersContainers){
            for(var i=0; i<answersContainers.length; i++){
                var contentHidden = answersContainers[i].getElementsByClassName('content')[0].value;
                contentHidden = contentHidden.replace(/<img/g, '<a href="#" class="ex-zh-display">显示图片</a><br><img style="display:none"');
                answersContainers[i].getElementsByClassName('content')[0].value = contentHidden;
            }
        }
    }else if(_url.indexOf('question') > -1){
        // 问题页面
    }
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver

    // 选择目标节点
    var targets = document.getElementsByClassName('zm-item-rich-text');
     
    // 创建观察者对象
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        var btns = mutation.target.getElementsByClassName('ex-zh-display');
        for (var btnIt = btns.length - 1; btnIt >= 0; btnIt--) {
            btns[btnIt].addEventListener('click', function(e){
                e.preventDefault();
                e.target.nextSibling.nextSibling.style.display = 'block';
            })
        };
      });    
    });
     
    // 配置观察选项:
    var config = {childList: true}
     
    // 传入目标节点和观察选项
    for (var tarIt = targets.length - 1; tarIt >= 0; tarIt--) {
        observer.observe(targets[tarIt], config);
    };
     
    // var profileDom = document.getElementById('top-nav-profile-dropdown');
    // if(profileDom){
    //     var liDom = document.createElement('li');
    //     liDom.innerHTML =   '<a class="ex-zh-nopic" href="javascrip:void(0)" tabindex="-1">'+
    //                             '<i class="zg-icon zg-icon-dd-settings"></i>'+'无图'
    //                         '</a>';
    //     profileDom.appendChild(liDom);
    // }
    // profileDom.getElementsByClassName('ex-zh-nopic')[0].addEventListener('click', function(){
    // });
})();
