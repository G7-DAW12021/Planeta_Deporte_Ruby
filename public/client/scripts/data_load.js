
/*Wait for the document to be ready*/
$(document).ready(function(){
    /*--------------------------------------------------------------------------Retrieve data from JSON file-----------------------------------------------------------------------*/
    //$.getJSON("data.json",function(json) {
    //$.getJSON("http://localhost:3000/articles.json",function(json) {
        /*To know what html file is loaded*/
        $.getJSON("http://localhost:3000/sendToken",function(json) {
            var prueba = json;
            console.log(prueba);

        });

        var path = window.location.pathname;
        var page = path.split("/").pop();
        var data;
    
        /*Flow control depending of the html document loaded*/
        switch(page) {
            
            case "writer_comments_panel.html":
            case "admin_comments_panel.html":
                $.getJSON("http://localhost:3000/articles.json",function(json) {
                    data = json.comentarios;
                    //var dataUsers = json.data[0].usuarios;
                    var dataNews = json.noticias;
                    //var dataUsers = json.usuarios;
                    //var dataNewsComments = json.data[3].comentariosnoticias;
                    $('.comments_table').empty();

                    var th = '<tr>\
                                <th class="author_th">Autor</th>\
                                <th class="comment_th">Comentario</th>\
                                <th class="news_th">Noticia</th>\
                                <th class="actions_th">Acciones</th>\
                            </tr>';

                    $('.comments_table').append(th);

                    console.log(data);
                    $.each(data, function (i) {
                        $.each(data[i], function (k) {
                            var name;
                            var photo;
                            var news;
                            var idautor = this['idautor'];
                            var id = this['id'];
                            var idnoticia = this['idnoticia'];


                            /*JOIN de Comentarios con Usuarios*/
                            /*$.each(dataUsers, function (i) {
                                if (idautor == dataUsers[i].id) {
                                    name = dataUsers[i].nombre;
                                    photo = dataUsers[i].foto;
                                }

                            });*/

                            /*JOIN de Comentarios y Noticias*/
                            /*$.each(dataNewsComments, function (j) {
                                if (id == dataNewsComments[j].idcomentario) {
                                    var idnew = dataNewsComments[j].idnoticia;

                                    $.each(dataNews, function (k) {
                                        if (idnew == dataNews[k].id) {
                                            news = dataNews[k];

                                        }
                                    });
                                }
                            });*/




                            /*JOIN de Comentarios con Usuarios*/
                            /*$.each(dataUsers, function (i) {
                                if (idautor == dataUsers[i].id) {
                                    name = dataUsers[i].nombre;
                                    photo = dataUsers[i].foto;
                                }

                            });*/

                            /*JOIN de Comentarios y Noticias*/
                            $.each(dataNews, function (j) {
                                if (idnoticia == dataNews[j].id) {
                                    news = dataNews[j];
                                }
                            });

                            if (page == "admin_comments_panel.html") {


                                var info = '<tr>\
                                            <td><img class="comments_table_profile_img" title="User Img" alt="User Img" src="' + photo + '"> <p class="author_name">' + name + '</p></td>\
                                            <td class="comment_txt">' + this['texto'] + '</td>\
                                            <td class="comment_new_txt">' + news.titulo + '</td>\
                                            <td class="actions_td"> \
                                                <a class="edit_table_links" href="new_registered.html?new=' + news.id + '"> Editar comentario</a>\
                                                <a class="remove_table_links" href=""> Eliminar comentario</a>\
                                                <a class="answer_table_links" href="new_registered.html?new=' + news.id + '"> Responder</a> <br>\
                                            </td>';
                            } else {
                                var info = '<tr>\
                                            <td><img class="comments_table_profile_img" title="User Img" alt="User Img" src="' + photo + '"> <p class="author_name">' + name + '</p></td>\
                                            <td class="comment_txt">' + this['texto'] + '</td>\
                                            <td class="comment_new_txt">' + news.titulo + '</td>\
                                            <td class="actions_td_writer"> \
                                                <a class="remove_table_links" href=""> Eliminar comentario</a>\
                                                <a class="answer_table_links" href="new_registered.html?new=' + news.id + '"> Responder</a> <br>\
                                            </td>';
                            }

                            $('.comments_table').append(info);
                        });
                    });
                });

            break;

            case "writer_content_panel.html":
            case "admin_content_panel.html":
                $.getJSON("http://localhost:3000/articles.json",function(json) {

                    data = json.noticias;
                    $('.content_section').empty();
                    var location;

                    if(page == "writer_content_panel.html") {
                        location = "window.location.href='writer_create_news.html'";
                    } else {
                        location = "window.location.href='create_news.html'";
                    }

                    $.each(data, function(i) {
                        var info=   '<div class="div_content_panel_new">\
                                    <div onclick= "window.location.href=\'new_registered.html?new='+ data[i].id +'\'">\
                                    <img class="img_content_panel_new" title="New" alt="New" src="'+ this['foto']+ '">\
                                    <p class="text_content_panel_new">'+ this['titulo'] + '</p>\
                                    </div>\
                                    <div class="edit_remove_btns">\
                                        <button onclick="'+ location +'" class="button_edit">\
                                            <img  class="edit_delete" title="Edit" alt="Edit" src="img/edit.png">\
                                        </button>\
                                        <button class="button_delete" type="button">\
                                            <img class="edit_delete" title="Delete" alt="Delete" src="img/delete.png">\
                                        </button>\
                                    </div>\
                                </div';
                        $('.content_section').append(info);
                    });
                });

            break;

            case "admin_users_panel.html":
                data = json.data[0].usuarios;
                $('.users_table').empty();
                var th =   '<tr>\
                                <th>Foto</th>\
                                <th>Nombre</th>\
                                <th>Apellido</th>\
                                <th>Email</th>\
                                <th>Clave (Hash)</th>\
                                <th>Acciones</th>\
                            </tr>';

                $('.users_table').append(th);

                $.each(data, function() {
                    var info = '<tr>\
                                    <td><img class="users_table_profile_img" title="User Img" alt="User Img" src="'+ this['foto']+ '"></td>\
                                    <td>' + this['nombre'] + '</td>\
                                    <td>' + this['apellidos'] + '</td>\
                                    <td>' + this['email'] + '</td>\
                                    <td class="hash_td">' + this['clave'] + '</td>\
                                    <td>\
                                        <div class="edit_remove_btns_V2">\
                                            <button class="button_edit_V2" onclick="window.location.href= \'create_user.html\'">\
                                                <img  class="edit_delete_V2" title="Edit" alt="Edit" src="img/edit.png">\
                                            </button>\
                                            <button class="button_delete_V2" type="button">\
                                                <img class="edit_delete_V2" title="Delete" alt="Delete" src="img/delete.png">\
                                            </button>\
                                        </div>\
                                    </td>\
                                </tr>';
                    $('.users_table').append(info);
                });
            
            break;

            case "home_registered.html":
            case "home.html":
                if(page == "home.html") {
                    $('#main_new_link').attr("href","new.html?new=3");
                    $('#sec_new1_link').attr("href","new.html?new=5");
                    $('#sec_new2_link').attr("href","new.html?new=21");
                    $('#aside_new1_link').attr("href","new.html?new=6");
                    $('#aside_new2_link').attr("href","new.html?new=1");
                    $('#aside_new3_link').attr("href","new.html?new=2");

                    $('#mobile_new3_link').attr("href","new.html?new=4");
                    $('#mobile_new4_link').attr("href","new.html?new=6");

                } else {
                    $('#main_new_link').attr("href","new_registered.html?new=3");
                    $('#sec_new1_link').attr("href","new_registered.html?new=5");
                    $('#sec_new2_link').attr("href","new_registered.html?new=21");
                    $('#aside_new1_link').attr("href","new_registered.html?new=6");
                    $('#aside_new2_link').attr("href","new_registered.html?new=1");
                    $('#aside_new3_link').attr("href","new_registered.html?new=2");

                    $('#mobile_new3_link').attr("href","new_registered.html?new=4");
                    $('#mobile_new4_link').attr("href","new_registered.html?new=6");
                }

            break;

            case "sport_section_registered.html":
            case "sport_section.html":
                $.getJSON("http://localhost:3000/articles.json",function(json) {
                    data = json.noticias;//News
                    var flag = window.location.href.split("=").pop();//This indicates what section is the user in
                    $('#btn_login_out').attr("href", "sport_section.html?section=" + flag + ""); // Login out button
                    var pivot = false;
                    $('.main_new').empty();
                    $('.aside_news').empty();
                    var brdc;
                    if (page == "sport_section.html") {
                        brdc = 'sport_section.html?section=';

                    } else {
                        brdc = 'sport_section_registered.html?section=';
                    }

                    /*Switch to initialize the html depending on the section*/
                    switch (flag) {
                        case "futbol":
                            $('#brdc_section').text('Futbol');
                            $('#brdc_section_mobile').text('Futbol');
                            $('#brdc_section').attr('href', brdc + 'futbol');

                            pivot = false;
                            var token = true;
                            var url;
                            //Loop to load all JSON news into the webpage
                            for (var i = 0; i < data.length; i++) {

                                if (data[i].seccion == "Futbol") {

                                    //Main New
                                    if (token == true) {
                                        token = false;
                                        var mainNew = '<div class="main">\
                                                    <img id="futbol' + i + '" class="main_image" title="futbol' + i + '" alt="futbol' + i + '" src="' + data[i].foto + '">';

                                        if (page == "sport_section.html") {
                                            url = '<a class="news_links" href="new.html?new=' + data[i].id + '">';
                                        } else {
                                            url = '<a class="news_links" href="new_registered.html?new=' + data[i].id + '">';
                                        }
                                        mainNew += url;
                                        mainNew += '<h3 id="futbol' + i + '_text" class="news_text">' + data[i].titulo + '</h3>\
                                                    </a>\
                                                  </div>';

                                        var prevSec_Div = '<div class="secondary_news"> </div>';
                                        $('.main_new').append(mainNew);
                                        $('.main_new').append(prevSec_Div);

                                    } else if (window.innerWidth > 767) {

                                        //PC & Tablet
                                        //Secondary News
                                        if (pivot == false) {
                                            var secondNew = ' <div class="secondary_new_container">\
                                                            <img id="futbol' + i + '" class="secondary_images" title="futbol' + i + '" alt="futbol' + i + '" src="' + data[i].foto + '">';

                                            if (page == "sport_section.html") {
                                                url = '<a class="secondary_links" href="new.html?new=' + data[i].id + '">';
                                            } else {
                                                url = '<a class="secondary_links" href="new_registered.html?new=' + data[i].id + '">';
                                            }
                                            secondNew += url;
                                            secondNew += '<h5 id="futbol' + i + '_text" class="news_text sport_sec_text vertical">' + data[i].titulo + '</h5>\
                                                    </a>\
                                                    </div>';
                                            $('.secondary_news').append(secondNew);
                                            pivot = true;

                                            //Aside News
                                        } else if (pivot == true) {

                                            var asideNew = '<div class="aside_new">\
                                                            <img id="futbol' + i + '" class="aside_images" title="futbol' + i + '" alt="futbol' + i + '" src="' + data[i].foto + '"/>';

                                            if (page == "sport_section.html") {
                                                url = '<a class="news_links" href="new.html?new=' + data[i].id + '">';
                                            } else {
                                                url = '<a class="news_links" href="new_registered.html?new=' + data[i].id + '">';
                                            }
                                            asideNew += url;
                                            asideNew += '<h6 id="futbol' + i + '_text" class="news_text">' + data[i].titulo + '</h6>\
                                                    </a>\
                                                    </div>';
                                            $('.aside_news').append(asideNew);
                                            pivot = false;
                                        }
                                    } else {
                                        //Mobile (All Secondary News)
                                        var secondNewMobile = ' <div class="secondary_new_container secondary_new_mobile">\
                                                            <img id="futbol' + i + '" class="secondary_images" title="futbol' + i + '" alt="futbol' + i + '" src="' + data[i].foto + '">';

                                        if (page == "sport_section.html") {
                                            url = '<a class="secondary_links" href="new.html?new=' + data[i].id + '">';
                                        } else {
                                            url = '<a class="secondary_links" href="new_registered.html?new=' + data[i].id + '">';
                                        }

                                        secondNewMobile += url;
                                        secondNewMobile += '<h5 id="futbol' + i + '_text" class="news_text sport_sec_text vertical">' + data[i].titulo + '</h5>\
                                                    </a>\
                                                    </div>';
                                        $('.secondary_news').append(secondNewMobile);
                                    }
                                }
                            }
                            break;

                        case "baloncesto":
                            $('#brdc_section').text('Baloncesto');
                            $('#brdc_section_mobile').text('Baloncesto');
                            $('#brdc_section').attr('href', brdc + 'baloncesto');
                            pivot = false;
                            var token = true;
                            //Loop to load all JSON news into the webpage
                            for (var i = 0; i < data.length; i++) {
                                if (data[i].seccion == "Baloncesto") {

                                    //Main New
                                    if (token == true) {
                                        token = false;
                                        var mainNew = '<div class="main">\
                                                    <img id="baloncesto' + i + '" class="main_image" title="baloncesto' + i + '" alt="baloncesto' + i + '" src="' + data[i].foto + '">';

                                        if (page == "sport_section.html") {
                                            url = '<a class="news_links" href="new.html?new=' + data[i].id + '">';
                                        } else {
                                            url = '<a class="news_links" href="new_registered.html?new=' + data[i].id + '">';
                                        }
                                        mainNew += url;
                                        mainNew += '<h3 id="baloncesto' + i + '_text" class="news_text">' + data[i].titulo + '</h3>\
                                                </a>\
                                                </div>';

                                        var prevSec_Div = '<div class="secondary_news"> </div>';
                                        $('.main_new').append(mainNew);
                                        $('.main_new').append(prevSec_Div);
                                    } else if (window.innerWidth > 767) {
                                        //PC & Tablet
                                        //Secondary News
                                        if (pivot == false) {
                                            var secondNew = ' <div class="secondary_new_container">\
                                                            <img id="baloncesto' + i + '" class="secondary_images" title="baloncesto' + i + '" alt="baloncesto' + i + '" src="' + data[i].foto + '">';

                                            if (page == "sport_section.html") {
                                                url = '<a class="secondary_links" href="new.html?new=' + data[i].id + '">';
                                            } else {
                                                url = '<a class="secondary_links" href="new_registered.html?new=' + data[i].id + '">';
                                            }
                                            secondNew += url;
                                            secondNew += '<h5 id="baloncesto' + i + '_text" class="news_text sport_sec_text vertical">' + data[i].titulo + '</h5>\
                                                    </a>\
                                                    </div>';

                                            $('.secondary_news').append(secondNew);
                                            pivot = true;

                                            //Aside News
                                        } else if (pivot == true) {

                                            var asideNew = '<div class="aside_new">\
                                                            <img id="baloncesto' + i + '" class="aside_images" title="baloncesto' + i + '" alt="baloncesto' + i + '" src="' + data[i].foto + '"/>';

                                            if (page == "sport_section.html") {
                                                url = '<a class="news_links" href="new.html?new=' + data[i].id + '">';
                                            } else {
                                                url = '<a class="news_links" href="new_registered.html?new=' + data[i].id + '">';
                                            }
                                            asideNew += url;
                                            asideNew += '<h6 id="baloncesto' + i + '_text" class="news_text">' + data[i].titulo + '</h6>\
                                                    </a>\
                                                    </div>';

                                            $('.aside_news').append(asideNew);
                                            pivot = false;
                                        }
                                    } else {
                                        //Mobile
                                        var secondNewMobile = ' <div class="secondary_new_container secondary_new_mobile">\
                                                            <img id="baloncesto' + i + '" class="secondary_images" title="baloncesto' + i + '" alt="baloncesto' + i + '" src="' + data[i].foto + '">';

                                        if (page == "sport_section.html") {
                                            url = '<a class="secondary_links" href="new.html?new=' + data[i].id + '">';
                                        } else {
                                            url = '<a class="secondary_links" href="new_registered.html?new=' + data[i].id + '">';
                                        }
                                        secondNewMobile += url;
                                        secondNewMobile += '<h5 id="baloncesto' + i + '_text" class="news_text sport_sec_text vertical">' + data[i].titulo + '</h5>\
                                                      </a>\
                                                      </div>';

                                        $('.secondary_news').append(secondNewMobile);
                                    }
                                }
                            }

                            break;

                        case "tenis":
                            $('#brdc_section').text('Tenis');
                            $('#brdc_section_mobile').text('Tenis');
                            $('#brdc_section').attr('href', brdc + 'tenis');
                            pivot = false;
                            var token = true;
                            //Loop to load all JSON news into the webpage
                            for (var i = 0; i < data.length; i++) {
                                if (data[i].seccion == "Tenis") {

                                    //Main New
                                    if (token == true) {
                                        token = false;
                                        var mainNew = '<div class="main">\
                                                    <img id="tenis' + i + '" class="main_image" title="tenis' + i + '" alt="tenis' + i + '" src="' + data[i].foto + '">';

                                        if (page == "sport_section.html") {
                                            url = '<a class="news_links" href="new.html?new=' + data[i].id + '">';
                                        } else {
                                            url = '<a class="news_links" href="new_registered.html?new=' + data[i].id + '">';
                                        }
                                        mainNew += url;
                                        mainNew += '<h3 id="tenis' + i + '_text" class="news_text">' + data[i].titulo + '</h3>\
                                               </a>\
                                               </div>';

                                        var prevSec_Div = '<div class="secondary_news"> </div>';
                                        $('.main_new').append(mainNew);
                                        $('.main_new').append(prevSec_Div);
                                    } else if (window.innerWidth > 767) {
                                        //PC & Tablet
                                        //Secondary News
                                        if (pivot == false) {
                                            var secondNew = ' <div class="secondary_new_container">\
                                                            <img id="tenis' + i + '" class="secondary_images" title="tenis' + i + '" alt="tenis' + i + '" src="' + data[i].foto + '">';

                                            if (page == "sport_section.html") {
                                                url = '<a class="secondary_links" href="new.html?new=' + data[i].id + '">';
                                            } else {
                                                url = '<a class="secondary_links" href="new_registered.html?new=' + data[i].id + '">';
                                            }
                                            secondNew += url;
                                            secondNew += '<h5 id="tenis' + i + '_text" class="news_text sport_sec_text vertical">' + data[i].titulo + '</h5>\
                                                     </a>\
                                                     </div>';

                                            $('.secondary_news').append(secondNew);
                                            pivot = true;
                                            //Aside News
                                        } else if (pivot == true) {

                                            var asideNew = '<div class="aside_new">\
                                                            <img id="tenis' + i + '" class="aside_images" title="tenis' + i + '" alt="tenis' + i + '" src="' + data[i].foto + '"/>';

                                            if (page == "sport_section.html") {
                                                url = '<a class="news_links" href="new.html?new=' + data[i].id + '">';
                                            } else {
                                                url = '<a class="news_links" href="new_registered.html?new=' + data[i].id + '">';
                                            }
                                            asideNew += url;
                                            asideNew += '<h6 id="tenis' + i + '_text" class="news_text">' + data[i].titulo + '</h6>\
                                                    </a>\
                                                    </div>';

                                            $('.aside_news').append(asideNew);
                                            pivot = false;
                                        }
                                    } else {
                                        //Mobile
                                        var secondNewMobile = ' <div class="secondary_new_container secondary_new_mobile">\
                                                            <img id="tenis' + i + '" class="secondary_images" title="tenis' + i + '" alt="tenis' + i + '" src="' + data[i].foto + '">';

                                        if (page == "sport_section.html") {
                                            url = '<a class="secondary_links" href="new.html?new=' + data[i].id + '">';
                                        } else {
                                            url = '<a class="secondary_links" href="new_registered.html?new=' + data[i].id + '">';
                                        }
                                        secondNewMobile += url;
                                        secondNewMobile += '<h5 id="tenis' + i + '_text" class="news_text sport_sec_text vertical">' + data[i].titulo + '</h5>\
                                                      </a>\
                                                      </div>';

                                        $('.secondary_news').append(secondNewMobile);
                                    }
                                }
                            }

                            break;

                        case "ciclismo":
                            $('#brdc_section').text('Ciclismo');
                            $('#brdc_section_mobile').text('Ciclismo');
                            $('#brdc_section').attr('href', brdc + 'ciclismo');
                            pivot = false;
                            var token = true;
                            //Loop to load all JSON news into the webpage
                            for (var i = 0; i < data.length; i++) {
                                if (data[i].seccion == "Ciclismo") {

                                    //Main New
                                    if (token == true) {
                                        token = false;
                                        var mainNew = '<div class="main">\
                                                    <img id="ciclismo' + i + '" class="main_image" title="ciclismo' + i + '" alt="ciclismo' + i + '" src="' + data[i].foto + '">';

                                        if (page == "sport_section.html") {
                                            url = '<a class="news_links" href="new.html?new=' + data[i].id + '">';
                                        } else {
                                            url = '<a class="news_links" href="new_registered.html?new=' + data[i].id + '">';
                                        }
                                        mainNew += url;
                                        mainNew += '<h3 id="ciclismo' + i + '_text" class="news_text">' + data[i].titulo + '</h3>\
                                               </a>\
                                               </div>';

                                        var prevSec_Div = '<div class="secondary_news"> </div>';
                                        $('.main_new').append(mainNew);
                                        $('.main_new').append(prevSec_Div);
                                    } else if (window.innerWidth > 767) {
                                        //PC & Tablet
                                        //Secondary News
                                        if (pivot == false) {
                                            var secondNew = ' <div class="secondary_new_container">\
                                                            <img id="ciclismo' + i + '" class="secondary_images" title="ciclismo' + i + '" alt="ciclismo' + i + '" src="' + data[i].foto + '">';

                                            if (page == "sport_section.html") {
                                                url = '<a class="secondary_links" href="new.html?new=' + data[i].id + '">';
                                            } else {
                                                url = '<a class="secondary_links" href="new_registered.html?new=' + data[i].id + '">';
                                            }
                                            secondNew += url;
                                            secondNew += '<h5 id="ciclismo' + i + '_text" class="news_text sport_sec_text vertical">' + data[i].titulo + '</h5>\
                                                    </a>\
                                                    </div>';

                                            $('.secondary_news').append(secondNew);
                                            pivot = true;

                                            //Aside News
                                        } else if (pivot == true) {

                                            var asideNew = '<div class="aside_new">\
                                                            <img id="ciclismo' + i + '" class="aside_images" title="cicesports' + i + '" alt="ciclismo' + i + '" src="' + data[i].foto + '"/>';

                                            if (page == "sport_section.html") {
                                                url = '<a class="news_links" href="new.html?new=' + data[i].id + '">';
                                            } else {
                                                url = '<a class="news_links" href="new_registered.html?new=' + data[i].id + '">';
                                            }
                                            asideNew += url;
                                            asideNew += '<h6 id="ciclismo' + i + '_text" class="news_text">' + data[i].titulo + '</h6>\
                                                    </a>\
                                                    </div>';

                                            $('.aside_news').append(asideNew);
                                            pivot = false;
                                        }
                                    } else {
                                        //Mobile
                                        var secondNewMobile = ' <div class="secondary_new_container secondary_new_mobile">\
                                                            <img id="ciclismo' + i + '" class="secondary_images" title="ciclismo' + i + '" alt="ciclismo' + i + '" src="' + data[i].foto + '">';

                                        if (page == "sport_section.html") {
                                            url = '<a class="secondary_links" href="new.html?new=' + data[i].id + '">';
                                        } else {
                                            url = '<a class="secondary_links" href="new_registered.html?new=' + data[i].id + '">';
                                        }
                                        secondNewMobile += url;
                                        secondNewMobile += '<h5 id="ciclismo' + i + '_text" class="news_text sport_sec_text vertical">' + data[i].titulo + '</h5>\
                                                      </a>\
                                                      </div>';

                                        $('.secondary_news').append(secondNewMobile);
                                    }
                                }
                            }
                            break;

                        case "motor":
                            $('#brdc_section').text('Motor');
                            $('#brdc_section_mobile').text('Motor');
                            $('#brdc_section').attr('href', brdc + 'motor');
                            pivot = false;
                            var token = true;
                            //Loop to load all JSON news into the webpage
                            for (var i = 0; i < data.length; i++) {
                                if (data[i].seccion == "Motor") {

                                    //Main New
                                    if (token == true) {
                                        token = false;
                                        var mainNew = '<div class="main">\
                                                    <img id="motor' + i + '" class="main_image" title="motor' + i + '" alt="motor' + i + '" src="' + data[i].foto + '">';

                                        if (page == "sport_section.html") {
                                            url = '<a class="news_links" href="new.html?new=' + data[i].id + '">';
                                        } else {
                                            url = '<a class="news_links" href="new_registered.html?new=' + data[i].id + '">';
                                        }
                                        mainNew += url;
                                        mainNew += '<h3 id="motor' + i + '_text" class="news_text">' + data[i].titulo + '</h3>\
                                               </a>\
                                               </div>';

                                        var prevSec_Div = '<div class="secondary_news"> </div>';
                                        $('.main_new').append(mainNew);
                                        $('.main_new').append(prevSec_Div);
                                    } else if (window.innerWidth > 767) {
                                        //PC & Tablet
                                        //Secondary News
                                        if (pivot == false) {
                                            var secondNew = ' <div class="secondary_new_container">\
                                                            <img id="motor' + i + '" class="secondary_images" title="motor' + i + '" alt="motor' + i + '" src="' + data[i].foto + '">';

                                            if (page == "sport_section.html") {
                                                url = '<a class="secondary_links" href="new.html?new=' + data[i].id + '">';
                                            } else {
                                                url = '<a class="secondary_links" href="new_registered.html?new=' + data[i].id + '">';
                                            }
                                            secondNew += url;
                                            secondNew += '<h5 id="motor' + i + '_text" class="news_text sport_sec_text vertical">' + data[i].titulo + '</h5>\
                                                     </a>\
                                                     </div>';

                                            $('.secondary_news').append(secondNew);
                                            pivot = true;

                                            //Aside News
                                        } else if (pivot == true) {

                                            var asideNew = '<div class="aside_new">\
                                                            <img id="motor' + i + '" class="aside_images" title="motor' + i + '" alt="motor' + i + '" src="' + data[i].foto + '"/>';
                                            if (page == "sport_section.html") {
                                                url = '<a class="news_links" href="new.html?new=' + data[i].id + '">';
                                            } else {
                                                url = '<a class="news_links" href="new_registered.html?new=' + data[i].id + '">';
                                            }
                                            asideNew += url;
                                            asideNew += '<h6 id="motor' + i + '_text" class="news_text">' + data[i].titulo + '</h6>\
                                                    </a>\
                                                    </div>';

                                            $('.aside_news').append(asideNew);
                                            pivot = false;
                                        }
                                    } else {
                                        //Mobile
                                        var secondNewMobile = ' <div class="secondary_new_container secondary_new_mobile">\
                                                            <img id="motor' + i + '" class="secondary_images" title="motor' + i + '" alt="motor' + i + '" src="' + data[i].foto + '">';
                                        if (page == "sport_section.html") {
                                            url = '<a class="secondary_links" href="new.html?new=' + data[i].id + '">';
                                        } else {
                                            url = '<a class="secondary_links" href="new_registered.html?new=' + data[i].id + '">';
                                        }
                                        secondNewMobile += url;
                                        secondNewMobile += '<h5 id="motor' + i + '_text" class="news_text sport_sec_text vertical">' + data[i].titulo + '</h5>\
                                                      </a>\
                                                      </div>';

                                        $('.secondary_news').append(secondNewMobile);
                                    }
                                }
                            }
                            break;

                        case "esports":
                            $('#brdc_section').text('eSports');
                            $('#brdc_section_mobile').text('eSports');
                            $('#brdc_section').attr('href', brdc + 'esports');
                            pivot = false;
                            var token = true;
                            //Loop to load all JSON news into the webpage
                            for (var i = 0; i < data.length; i++) {
                                if (data[i].seccion == "eSports") {

                                    //Main New
                                    if (token == true) {
                                        token = false;
                                        var mainNew = '<div class="main">\
                                                    <img id="esports' + i + '" class="main_image" title="esports' + i + '" alt="esports' + i + '" src="' + data[i].foto + '">';

                                        if (page == "sport_section.html") {
                                            url = '<a class="news_links" href="new.html?new=' + data[i].id + '">';
                                        } else {
                                            url = '<a class="news_links" href="new_registered.html?new=' + data[i].id + '">';
                                        }
                                        mainNew += url;
                                        mainNew += '<h3 id="esports' + i + '_text" class="news_text">' + data[i].titulo + '</h3>\
                                               </a>\
                                               </div>';

                                        var prevSec_Div = '<div class="secondary_news"> </div>';
                                        $('.main_new').append(mainNew);
                                        $('.main_new').append(prevSec_Div);
                                    } else if (window.innerWidth > 767) {
                                        //PC & Tablet
                                        //Secondary News
                                        if (pivot == false) {
                                            var secondNew = ' <div class="secondary_new_container">\
                                                            <img id="esports' + i + '" class="secondary_images" title="esports' + i + '" alt="esports' + i + '" src="' + data[i].foto + '">';

                                            if (page == "sport_section.html") {
                                                url = '<a class="secondary_links" href="new.html?new=' + data[i].id + '">';
                                            } else {
                                                url = '<a class="secondary_links" href="new_registered.html?new=' + data[i].id + '">';
                                            }
                                            secondNew += url;
                                            secondNew += '<h5 id="esports' + i + '_text" class="news_text sport_sec_text vertical">' + data[i].titulo + '</h5>\
                                                     </a>\
                                                     </div>';

                                            $('.secondary_news').append(secondNew);
                                            pivot = true;

                                            //Aside News
                                        } else if (pivot == true) {

                                            var asideNew = '<div class="aside_new">\
                                                            <img id="esports' + i + '" class="aside_images" title="esports' + i + '" alt="esports' + i + '" src="' + data[i].foto + '"/>';
                                            if (page == "sport_section.html") {
                                                url = '<a class="news_links" href="new.html?new=' + data[i].id + '">';
                                            } else {
                                                url = '<a class="news_links" href="new_registered.html?new=' + data[i].id + '">';
                                            }
                                            asideNew += url;
                                            asideNew += '<h6 id="esports' + i + '_text" class="news_text">' + data[i].titulo + '</h6>\
                                                    </a>\
                                                    </div>';

                                            $('.aside_news').append(asideNew);
                                            pivot = false;
                                        }
                                    } else {
                                        //Mobile
                                        var secondNewMobile = ' <div class="secondary_new_container secondary_new_mobile">\
                                                            <img id="esports' + i + '" class="secondary_images" title="esports' + i + '" alt="esports' + i + '" src="' + data[i].foto + '">';

                                        if (page == "sport_section.html") {
                                            url = '<a class="secondary_links" href="new.html?new=' + data[i].id + '">';
                                        } else {
                                            url = '<a class="secondary_links" href="new_registered.html?new=' + data[i].id + '">';
                                        }
                                        secondNewMobile += url;
                                        secondNewMobile += '<h5 id="esports' + i + '_text" class="news_text sport_sec_text vertical">' + data[i].titulo + '</h5>\
                                                      </a>\
                                                      </div>';

                                        $('.secondary_news').append(secondNewMobile);
                                    }
                                }
                            }
                            break;
                    };
                });
            break;

            case "new_registered.html":
            case "new.html":
                data = json.data[1].noticias;//News
                dataUsers=json.data[0].usuarios;
                dataComments = json.data[2].comentarios;
                dataUserComments = json.data[3].comentariosnoticias;
                var flag = window.location.href.split("=").pop();//This indicates what new has been selected
                $('#btn_login_out').attr("href","new.html?new=" + flag+ ""); // Login out button

                //Modifying breadcrumbs attributes and values
                $('#brdc_new_section').text(data[flag-1].seccion);
                if(page == "new.html") $('#brdc_new_section').attr("href", "sport_section.html?seccion="+ data[flag-1].seccion.toLowerCase());
                else $('#brdc_new_section').attr("href", "sport_section_registered.html?seccion="+ data[flag-1].seccion.toLowerCase());
                $('#brdc_new input').val(data[flag-1].titulo);
                $('#brdc_new_tablet input').val(data[flag-1].titulo);
                $('#brdc_new_mobile').val(data[flag-1].titulo);

                $('.main_new_section').empty();
                $('.author_biography').empty();
                $('.recommendations').empty();
                $('.comments').empty();

                //Get the author
                var autor;
                $.each(dataUsers, function(i) {
                    if(dataUsers[i].id == data[flag-1].idautor) {
                        autor = dataUsers[i];
                    }
                });

                //Date format
                var unix = data[flag-1].fecha;
                var date = new Date(unix * 1000);


                //Main New
                var mainNew='<header>\
                                <h1>'+ data[flag-1].titulo + '</h1>\
                                <h4 class="new_subtitle">'+ data[flag-1].subtitulo + '</h4>\
                            </header>\
                            <img class="new_image" title="photo_new" alt="photo_new" src="'+ data[flag-1].foto + '">\
                            <pre class="new_date">'+ autor.nombre + ' ' + autor.apellidos +  '     Publicado <time>'+ date.toLocaleString('en-GB')+ '</time></pre>\
                            <p>'+ data[flag-1].cuerpo + '</p>';

                $('.main_new_section').append(mainNew);

                //Author section
                var author='<div class="author_photo_section">\
                                <img class="author_image" title="Author photo" alt="Author photo" src="'+ autor.foto + '">\
                            </div>\
                            <div class="author_text_section">\
                                <header>\
                                    <h3>'+ autor.nombre + ' ' + autor.apellidos +  '</h3>\
                                </header>\
                                <p class="biography_text">Nací hará hoy treinta años, en un caluroso 3 de octubre de 1988, en la Maternidad de un hospital situado en la ciudad de Murcia.\
                                Si bien el tercero y más joven de de mis hermanos, mi nacimiento fue también altamente deseado por mis padres. Los dos primeros \
                                años de mi vida fueron muy felices, rodeado de mi familia y empezando a descubrir el mundo que me rodeaba. Sin embargo durante el\
                                segundo de ellos mis padres recibieron una oferta de trabajo en Madrid, mudándonos todos a un piso cercano a la Puerta del Sol.</p>\
                            </div>';

                $('.author_biography').append(author);

                //Recommendations section
                //Get the related news
                var new1;
                var new2;
                var new3;
                var count=0;
                $.each(data, function(i) {
                    if(data[i].seccion == data[flag-1].seccion) {
                        if(data[i].id != data[flag-1].id) {
                            if(count == 0) {
                                new1 = data[i];
                                count++;
                            } else if (count == 1) {
                                new2 = data[i];
                                count++;
                            } else if ( count == 2) {
                                new3 = data[i];
                                count++;
                            }
                        }
                    }
                });

                var url;
                var url2;
                var url3;
                if(page == "new.html") {
                    url='<a class="news_links" href="new.html?new='+ new1.id +'">';
                    url2='<a class="news_links" href="new.html?new='+ new2.id +'">';
                    url3='<a class="news_links" href="new.html?new='+ new3.id +'">';

                } else {
                    url='<a class="news_links" href="new_registered.html?new='+ new1.id +'">';
                    url2='<a class="news_links" href="new_registered.html?new='+ new2.id +'">';
                    url3='<a class="news_links" href="new_registered.html?new='+ new3.id +'">';
                }

                var relatedNews = '<header>\
                                        <h3 class="section_header">Te recomendamos</h3>\
                                    </header>\
                                    <div class="recommendation_new_section_1">\
                                        <img class="recommendation_images" title="new1" alt="new1" src="'+ new1.foto + '">\
                                        <header>'
                                            + url +'\
                                                <h6 class="recommendation_text">'+ new1.titulo + '</h6>\
                                            </a>\
                                        </header>\
                                    </div>\
                                    <div class="recommendation_new_section_2">\
                                        <img class="recommendation_images" title="new2" alt="new2" src="'+ new2.foto + '">\
                                        <header>'
                                            + url2 +'\
                                                <h6 class="recommendation_text">'+ new2.titulo + '</h6>\
                                            </a>\
                                        </header>\
                                    </div>\
                                    <div class="recommendation_new_section_3">\
                                        <img class="recommendation_images" title="new3" alt="new3" src="'+ new3.foto + '">\
                                        <header>'
                                            + url3 +'\
                                                <h6 class="recommendation_text">'+ new3.titulo + '</h6>\
                                            </a>\
                                        </header>\
                                    </div>';

                $('.recommendations').append(relatedNews);


                //Comments Section
                var commentsHeader='<header>\
                                        <h3 class="section_header">Comentarios</h3>\
                                    </header>';

                $('.comments').append(commentsHeader);

                var array='';
                
                /* Get the related Comments: JOIN Comments, News & Users*/
                $.each(dataUserComments, function(j){
                    if(dataUserComments[j].idnoticia == data[flag-1].id) {
                        var idcomment = dataUserComments[j].idcomentario;
                        $.each(dataComments, function(k){
                            if(idcomment == dataComments[k].id) {
                                var comment = dataComments[k];
                                $.each(dataUsers, function(l){
                                    if(comment.idautor == dataUsers[l].id) {
                                        var user = dataUsers[l];
                                        var relatedComments = '<div class="comment_section">\
                                                                    <div class="commentator_photo_section">\
                                                                        <img class="commentator_photo" title="Comentator photo" alt="Comentator photo 1" src="'+ user.foto + '">\
                                                                    </div>\
                                                                    <div class="commentator_text_section">\
                                                                        <header>\
                                                                            <h3 class="section_header">'+ user.nombre + ' ' + user.apellidos +  '</h3>\
                                                                        </header>\
                                                                        <p class="commentator_text">' + comment.texto +'</p>\
                                                                    </div>\
                                                                </div>';
                                        array += relatedComments;
                                    }
                                });
                            }
                        });
                    }
                });

                $('.comments').append(array);
            break;
        }
    //}); -> del getJSON general
});