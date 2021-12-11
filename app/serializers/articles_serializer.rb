class ArticlesSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :foto, :fecha, :titulo, :subtitulo, :seccion, :cuerpo
  has_many :comments
end
