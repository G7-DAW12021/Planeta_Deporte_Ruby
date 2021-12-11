#json.array! 'noticias' do
#json.noticias do
#json.noticias(@articles) do |article|
  json.array! @articles do |article|
    json.id article.id
    json.foto article.foto
    json.fecha article.fecha
    json.titulo article.titulo
    json.subtitulo article.subtitulo
    json.seccion article.seccion
    json.cuerpo article.cuerpo
  end


json.array! @articles do |article|
  json.array! article.comments do |comment|
    json.id comment.id
    json.texto comment.texto
  end
end





