class Player < ActiveRecord::Base
  has_many :seats
  has_many :games, through: :seats
end
