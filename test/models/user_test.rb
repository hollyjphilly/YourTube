# == Schema Information
#
# Table name: users
#
#  id                :bigint           not null, primary key
#  username          :string           not null
#  password_digest   :string           not null
#  email             :string           not null
#  session_token     :string           not null
#  first_name        :string           not null
#  last_name         :string           not null
#  profile_image_url :string
#  channel_image_url :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
