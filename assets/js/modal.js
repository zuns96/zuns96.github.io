$(function(){
    // 	이미지 클릭시 해당 이미지 모달
    $(".imgC").click(function(){
        $(".modal").show();
        // 해당 이미지 가겨오기
        var imgSrc = $(this).children("img").attr("src");
        $(".modalBox img").attr("src", imgSrc);
    });
    
    //.modal안에 button을 클릭하면 .modal닫기
    $(".modal button").click(function()
    {
        $(".modal").hide();
    });

    $(".modalBox").click(function (e)
    {
        if (e.target.className != "modalBox") 
        {
            return false;
        } 
        else
        {
            $(".modal").hide();
        }
    });

    //.modal밖에 클릭시 닫힘
    $(".modal").click(function (e) 
    {
        if (e.target.className != "modal") 
        {
            return false;
        } 
        else 
        {
            $(".modal").hide();
        }
    });
});