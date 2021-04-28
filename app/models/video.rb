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

validates :title, :uploader_id, presence: true

# validate :ensure_moviefile
	
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

has_many :likes,
	as: :likeable

# def ensure_moviefile
# 	unless self.moviefile.content_type == "video/mp4"
# 		errors[:video] << "must be an mp4 file."
# 	end
# end

end
