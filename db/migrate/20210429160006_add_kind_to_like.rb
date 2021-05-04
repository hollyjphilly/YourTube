class AddKindToLike < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :kind, :string, null: false
  end
end
