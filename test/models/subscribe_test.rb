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
require 'test_helper'

class SubscribeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
