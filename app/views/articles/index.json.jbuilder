json.array! @articles do |article|
  json.id article.id
  json.foto article.foto
  json.fecha article.fecha
  json.titulo article.titulo
  json.subtitulo article.subtitulo
  json.seccion article.seccion
  json.cuerpo article.cuerpo
end