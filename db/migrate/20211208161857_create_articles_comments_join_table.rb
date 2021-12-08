class CreateArticlesCommentsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :articles, :comments do |t|
      t.index :article_id
      t.index :comment_id
    end
  end
end
