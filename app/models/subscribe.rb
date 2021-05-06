# == Schema Information
#
# Table name: subscribes
#
#  id            :bigint           not null, primary key
#  subscriber_id :integer          not null
#  subscribee_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Subscribe < ApplicationRecord

    validates :subscriber_id, uniqueness: { scope: :subscribee_id }

    belongs_to :subscriber,
        foreign_key: :subscriber_id,
        class_name: :User
        
    belongs_to :subscribee,
        foreign_key: :subscribee_id,
        class_name: :User

end
