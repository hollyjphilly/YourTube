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
require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
