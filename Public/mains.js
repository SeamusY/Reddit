function openNav() {
    document.getElementById("mySidenav").style.width = "220px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function openCom() {
    document.getElementById("comments").style.width = "300px";
}
function closeCom() {
    document.getElementById("comments").style.width = "0";
}

$("#submit").click(function() {
    event.preventDefault();
    $.post(window.location.pathname /*/users/introduction*/, $("#commentsection").serialize(), function(data){
        console.log(data);
        console.log("POST SENT");
    });
});
//   $.ajax({
//     type: "GET",
//     url: window.location.href,
//     data: data,
//     success: success,
//     dataType: dataType
//   });