# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord
	
has_one_attached :moviefile
has_one_attached :thumbnail

belongs_to :user,
	foreign_key: :uploader_id,
	class_name: :User

has_many :comments,
	foreign_key: :video_id,
	class_name: :Comment

has_many :commenters,
	through: :comments,
	source: :commenter

end
