class Video < ApplicationRecord
	
has_one_attached :moviefile
has_one_attached :thumbnail

belongs_to :user,
	foreign_key: :uploader_id,
	class_name: :User

end