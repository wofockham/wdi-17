class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.text :title
      t.text :artwork

      t.timestamps null: false
    end
  end
end
