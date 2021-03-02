class User < ApplicationRecord
  validates :username, :email, :password_digest, presence: true
  validates :username, :email, uniqueness: true

  has_many :saved_movies
  has_many :movies, through: :saved_movies

  has_secure_password
end
