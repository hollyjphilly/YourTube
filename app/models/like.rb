# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  liker_id      :integer          not null
#  likeable_type :string           not null
#  likeable_id   :bigint           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord

    validates :liker_id,
        uniqueness: { scope: [:likeable_id, :likeable_type] }

    belongs_to :user,
        foreign_key: :liker_id,
        class_name: :user

    belongs_to :likeable,
        polymorphic: true

end
