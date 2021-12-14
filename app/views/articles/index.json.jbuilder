#json.usuarios do
#  json.array! @users do |user|
#    json.id user.id
#    json.foto user.foto
#    json.nombre user.nombre
#    json.apellidos user.apellidos
#    json.clave_digest user.clave_digest
#    json.tipo user.tipo
#  end
#end

#json.noticias do
#  json.array! @users do |user|
#    json.array! user.articles do |article|
#      json.id article.id
#      json.idautor article.user_id
#      json.foto article.foto
#      json.fecha article.fecha
#      json.titulo article.titulo
#      json.subtitulo article.subtitulo
#      json.seccion article.seccion
#      json.cuerpo article.cuerpo
#    end
#  end
#end

#json.comentarios do
#  json.array! @users do |user|
#    json.array! user.articles.comments do |comment|
#      json.id comment.id
#      json.idautor comment.user_id
#      json.idnoticia comment.article_id
#      json.texto comment.texto
#    end
#  end
#end







json.noticias do
    json.array! @articles do |article|
      json.id article.id
      json.idautor article.user_id
      json.foto article.foto
      json.fecha article.fecha
      json.titulo article.titulo
      json.subtitulo article.subtitulo
      json.seccion article.seccion
      json.cuerpo article.cuerpo
    end
end

json.comentarios do
  json.array! @articles do |article|
    json.array! article.comments do |comment|
      json.id comment.id
      json.idautor comment.user_id
      json.idnoticia comment.article_id
      json.texto comment.texto
    end
  end
end
