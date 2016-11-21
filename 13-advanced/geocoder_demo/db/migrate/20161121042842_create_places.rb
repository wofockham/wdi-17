class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :name
      t.text :address

      t.timestamps null: false
    end
  end
end
