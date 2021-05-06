class CreateSubscribes < ActiveRecord::Migration[5.2]
  def change
    create_table :subscribes do |t|
      t.integer :subscriber_id, null: false, foreign_key: true
      t.integer :subscribee_id, null: false, foreign_key: true

      t.timestamps
    end
    add_index :subscribes, :subscriber_id
    add_index :subscribes, [:subscribee_id, :subscriber_id], unique: true
  end
end
