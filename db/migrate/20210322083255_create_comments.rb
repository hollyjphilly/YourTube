class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :parent_comment_id, index: true, foreign_key: true
      t.integer :commenter_id, null: false, index: true, foreign_key: true
      t.integer :video_id, null: false, index: true, foreign_key: true

      t.timestamps
    end
  end
end
