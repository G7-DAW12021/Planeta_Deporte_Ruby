class CreateArticules < ActiveRecord::Migration[6.1]
  def change
    create_table :articules do |t|
      t.string :foto
      t.string :fecha
      t.text :titulo
      t.text :subtitulo
      t.string :seccion
      t.text :cuerpo

      t.timestamps
    end
  end
end
