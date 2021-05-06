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
class User < ApplicationRecord

    validates :username, :session_token, presence: true, uniqueness: true
    validates :first_name, :last_name, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :password_digest, presence: true

    has_many :comments,
        foreign_key: :commenter_id,
        class_name: :Comment

    has_many :comment_replies,
        foreign_key: :commenter_id,
        class_name: :Comment

    has_many :likes,
        foreign_key: :liker_id,
        class_name: :Like

    has_many :liked_videos,
        through: :likes,
        source: :likeable,
        source_type: :Video

    has_many :subscriptions,
        foreign_key: :subscriber_id,
        class_name: :Subscribe
    
    has_many :subscribers,
        foreign_key: :subscribee_id,
        class_name: :Subscribe

    before_validation :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(u, p)
        user = User.find_by(username: u)
        (user && user.is_password?(p)) ? user : nil
    end

    def password=(p)
        @password = p
        self.password_digest = BCrypt::Password.create(p)
    end

    def is_password?(p)
        BCrypt::Password.new(self.password_digest).is_password?(p)
    end

    def reset_session_token
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end
