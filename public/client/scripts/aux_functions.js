
//NOTA: EN ALGUNAS PAGINAS A VECES ES NECESARIO HACER UN REFRESH PARA VER LAS ACTUALIZACIONES DE LOS DATOS


function deleteArticle(id) {
    $.ajax ({
        url: 'http://localhost:3000/articles/' + id,
        type: 'DELETE',
        success: function(result) {
            //location.reload();
            document.location.reload(true);
        },
        error: function(errors) {
            document.location.reload(true);
        }
    });
}

function deleteUser(id) {
    $.ajax ({
        url: 'http://localhost:3000/users/' + id,
        type: 'DELETE',
        success: function(result) {
            document.location.reload(true);
        },
        error: function(errors) {
            document.location.reload(true);
        }
    });
}


function deleteComment(id, idnoticia) {
    $.ajax ({
        url: 'http://localhost:3000/articles/' + idnoticia + '/comments/' + id,
        type: 'DELETE',
        success: function(result) {
            document.location.reload(true);
        },
        error: function(errors) {
            document.location.reload(true);
        }
    });
}

