class ArticlesSerializer < ActiveModel::Serializer
  attributes :id, :autor, :foto, :fecha, :titulo, :subtitulo, :seccion, :cuerpo
end
