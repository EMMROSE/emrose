class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.text :message
      t.string :email
      t.string :phone
      t.string :name

      t.timestamps
    end
  end
end
