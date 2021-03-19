class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, index: true, null: false
      t.string :description
      t.integer :uploader_id, foreign_key: true, index: true, null: false

      t.timestamps
    end
  end
end
