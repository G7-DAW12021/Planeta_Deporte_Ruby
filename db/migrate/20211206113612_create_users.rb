class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :photo
      t.string :username
      t.string :lastname
      t.string :e_mail
      t.string :password_digest
      t.integer :type

      t.timestamps
    end
  end
end
