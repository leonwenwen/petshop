window.onscroll=function(){

    var sltop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var bannertop=$("#banner").css("height");
    //µ¼º½Î»ÖÃ
    if(sltop>parseInt(bannertop)){
        $("#mynav").addClass("navbar-fixed-top");
    }else{
        $("#mynav").removeClass("navbar-fixed-top");
    }
    if(sltop>650){
        $(".petbag-imgbox").show(500);
    }
    if(sltop>900){
        $(".dish-box").show(500)
    }
    if(sltop>1600){
        $(".pettools").show(500)
    }
}
