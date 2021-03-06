# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :string           not null
#  parent_comment_id :integer
#  commenter_id      :integer          not null
#  video_id          :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord

    validates :body, :commenter_id, :video_id, presence: true

    belongs_to :commenter,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :User

    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video

    belongs_to :parent_comment,
        primary_key: :id,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        optional: true

    has_many :replies,
        primary_key: :id,
        foreign_key: :parent_comment_id,
        class_name: :Comment

    has_one :parent_commenter,
        through: :parent_comment,
        source: :commenter

    has_many :likes,
        as: :likeable

end
