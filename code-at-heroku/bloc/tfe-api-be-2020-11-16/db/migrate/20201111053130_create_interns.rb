class CreateInterns < ActiveRecord::Migration[6.0]
  def change
    create_table :interns do |t|
      t.string :job_title
      t.string :company
      t.string :location
      t.string :summary
      t.string :url

      t.timestamps
    end
  end
end
