
//NOTA: EN ALGUNAS PAGINAS A VECES ES NECESARIO HACER UN REFRESH PARA VER LAS ACTUALIZACIONES DE LOS DATOS
function deleteArticle(id) {
    $.ajax ({
        url: 'http://localhost:3000/articles/' + id,
        type: 'DELETE',
        success: function(result) {
            //location.reload();
        },
        error: function(errors) {
            //location.reload();
        }
    });
}

function deleteUser(id) {
    $.ajax ({
        url: 'http://localhost:3000/users/' + id,
        type: 'DELETE',
        success: function(result) {
            //location.reload();
        },
        error: function(errors) {
            //location.reload();
        }
    });
}


function deleteComment(id) {
    $.ajax ({
        url: 'http://localhost:3000/comments/' + id,
        type: 'DELETE',
        success: function(result) {
            //location.reload();
        },
        error: function(errors) {
            //location.reload();
        }
    });
}

