var profileDom = document.getElementById('top-nav-profile-dropdown');
if(profileDom){
    var liDom = document.createElement('li');
    liDom.innerHTML =   '<a href="javascrip:void(0)" tabindex="-1>'+
                            '<i class="zg-icon zg-icon-dd-logout"></i>'+
                        '</a>';
    profileDom.appendChild(liDom);
}