
var like_button = new Vue ({
    el: '#like_button', 
    data: {
        counter: 0
    }
});

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        };
    },
    template: '<button v-on:click="count++">  <img src="img/like.svg" class="like-img" > <p class="p-count"> {{ count }} </p> </button>'
});

new Vue ({ el: '#components-demo' });

Vue.component('header-component' , {
    data: function () {
        return {
            title: "Named"
        };
    },
    template: '<div class="header__cont"><div class="header"><img src="img/cat.svg" alt="Логотип" class="logo"><span class="name-logo">Photobook</span><input class="search" type="text" autocapitalize="none" autocapitalize="none" placeholder="Поиск" value=""><div class="menu-list"><a href="#" class="menu-icon"><img src="img/домикк.svg" alt="home" width="25px"><a href="#" class="menu-icon"><img src="img/письмо.svg" alt="message"></a><a href="#" class="menu-icon"><img src="img/сердце.svg" alt="interes"></a><a href="#" class="menu-icon"><img src="img/avatar1.svg" alt="avatar" width="25px"></a></div></div></div>'
});
new Vue ({ el: '#header-demo'});

Vue.component('footer-component', {
    data: function () {
        return {
            title: ""
        };
    },
    template:'<div class="footer_content"><nav class="footer_menu"><ul class="list_foot"><li class="li_footer"><a href="#" class="link_foot"> О нас </a></li><li class="li_footer"><a href="#" class="link_foot"> Помощь </a></li><li class="li_footer"><a href="#" class="link_foot"> Конфиденциальность </a></li><li class="li_footer"><a href="#" class="link_foot"> Условия </a></li><li class="li_footer"><a href="#" class="link_foot"> Реклама </a></li><li class="li_footer"><a href=# class="link_foot"> Язык </a></li></ul></nav></div>'
});
new Vue ({ el: '#footer-demo'});