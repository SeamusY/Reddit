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

$("#submit").click(function(e) {
    e.preventDefault();
    $.post(window.location.pathname /*/users/introduction*/, $("#commentsection").serialize(), function(data){
        console.log("POST SENT");
    }).done(function(){
        $("#commentsection").val("")
    })
});
