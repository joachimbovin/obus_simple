

function toggle_image(id, image_src1, image_src2) {

    var image = document.getElementById(id);
    var parts = image.src.split("/");
    var image_src = parts[parts.length-1];
    //console.log(image.src)
    if (image_src=== image_src1){

        image.src= "images/" + image_src2;
    }
    else if (image_src=== image_src2){

        image.src= "images/" + image_src1;
    }
    else {
        image.src = "images/" + image_src1;
    }
}

/*
element = document.getElementById('face');


element.addEventListener("mouseover",function(){
     toggle_image('face', 'facebook_black.png', 'facebook_white.png') })
element.addEventListener("mouseout",function(){
    toggle_image('sound', 'soundcloud_black.png', 'soundcloud_white.png')
});
*/


$(document).ready(function(){
    $("#face").click(function(){
        $(this).attr("src","facebook_white.png");
    });
});



