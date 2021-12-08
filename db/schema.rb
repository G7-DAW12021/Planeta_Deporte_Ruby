# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_08_162428) do

  create_table "articles", force: :cascade do |t|
    t.string "foto"
    t.string "fecha"
    t.text "titulo"
    t.text "subtitulo"
    t.string "seccion"
    t.text "cuerpo"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "articles_comments", id: false, force: :cascade do |t|
    t.integer "article_id", null: false
    t.integer "comment_id", null: false
    t.index ["article_id"], name: "index_articles_comments_on_article_id"
    t.index ["comment_id"], name: "index_articles_comments_on_comment_id"
  end

  create_table "articles_users", id: false, force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "article_id", null: false
    t.index ["article_id"], name: "index_articles_users_on_article_id"
    t.index ["user_id"], name: "index_articles_users_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.text "texto"
    t.integer "article_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["article_id"], name: "index_comments_on_article_id"
  end

  create_table "comments_users", id: false, force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "comment_id", null: false
    t.index ["comment_id"], name: "index_comments_users_on_comment_id"
    t.index ["user_id"], name: "index_comments_users_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "foto"
    t.string "nombre"
    t.string "apellidos"
    t.string "email"
    t.string "clave"
    t.string "tipo"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "comments", "articles"
end