/*$('.button_delete').click(function() {
    console.log("holiiii");
    /*var id = $('.button_delete_V2').attr("name");
    console.log(id);*/
    /*$.ajax ({
        url: 'http://localhost:3000/articles/' + id,
        type: 'DELETE',
        success: function(result) {
        }
    });*//*
});*/




function deleteUser(id) {
    $.ajax ({
        url: 'http://localhost:3000/users/' + id,
        type: 'DELETE',
        success: function(result) {
        }
    });
}

/*
$('.button_delete_V2').click(function() {
    console.log("holiiii");
    var id = $('.button_delete_V2').attr("name");
    console.log(id);
    /*$.ajax ({
        url: 'http://localhost:3000/users/' + id,
        type: 'DELETE',
        success: function(result) {
        }
    });/*
});*/
