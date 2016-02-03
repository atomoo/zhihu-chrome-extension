;(function(){
    if(localStorage.zhHidePic == 1){
        var _url = window.location.href;
        if(_url == 'https://www.zhihu.com/'){
            // 首页
            var answersContainers = document.getElementsByClassName('zm-item-rich-text');
            if(answersContainers){
                for(var i=0; i<answersContainers.length; i++){
                    var contentHidden = answersContainers[i].getElementsByClassName('content')[0].value;
                    contentHidden = contentHidden.replace(/<img/g, '<a href="javascrip:void(0)" class="ex-zh-display">显示图片</a><img style="display:none"');
                    answersContainers[i].getElementsByClassName('content')[0].value = contentHidden;
                }
            }
        }else if(_url.indexOf('question') > -1){
            // 问题页面
            var richDoms = document.getElementsByClassName('zm-item-rich-text');
            if(richDoms){
                for (var i = richDoms.length - 1; i >= 0; i--) {
                    var imgs = richDoms[i].getElementsByClassName('zm-editable-content')[0].getElementsByTagName('img');
                    for (var it = imgs.length - 1; it >= 0; it--) {
                        var aDom = document.createElement('a');
                        aDom.href = 'javascript:void(0)';
                        aDom.innerText = '显示图片';
                        aDom.className = 'ex-zh-display';
                        imgs[it].parentNode.insertBefore(aDom, imgs[it]);
                        if(imgs[it].className.split(' ').indexOf('ex-zh-thumbs') == -1){
                            imgs[it].className += ' ex-zh-thumbs';
                        }
                    };
                }
                var btns = document.getElementsByClassName('ex-zh-display');
                for (var btnIt = btns.length - 1; btnIt >= 0; btnIt--) {
                    btns[btnIt].addEventListener('click', function(e){
                        e.preventDefault();
                        e.target.nextSibling.className = e.target.nextSibling.className.replace('ex-zh-thumbs','');
                    })
                }
            }
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
                    e.target.nextSibling.style.display = 'block';
                })
            }
          });    
        });
         
        // 配置观察选项:
        var config = {childList: true}
         
        // 传入目标节点和观察选项
        for (var tarIt = targets.length - 1; tarIt >= 0; tarIt--) {
            observer.observe(targets[tarIt], config);
        };
     }
    var profileDom = document.getElementById('top-nav-profile-dropdown');
    if(profileDom){
        var liDom = document.createElement('li');
        var text = localStorage.zhHidePic == 1 ? '有图':'无图';
        var dataType = localStorage.zhHidePic == 1 ? 'show':'hide';
        liDom.innerHTML =   '<a class="ex-zh-nopic" data-type="'+dataType+'" href="javascrip:void(0)" tabindex="-1">'+
                                '<i class="zg-icon zg-icon-dd-settings"></i>'+text
                            '</a>';
        profileDom.appendChild(liDom);
    }
    profileDom.getElementsByClassName('ex-zh-nopic')[0].addEventListener('click', function(e){
        if(e.target.getAttribute('data-type') == 'hide'){
            localStorage.zhHidePic = 1;
            e.target.setAttribute('data-type', 'show')
            e.target.innerHTML = e.target.innerHTML.replace('无','有');
        }else{
            localStorage.removeItem('zhHidePic');
            e.target.setAttribute('data-type', 'hide')
            e.target.innerHTML = e.target.innerHTML.replace('有','无');
        }
        
    });
})();
