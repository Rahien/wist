class Game < ActiveRecord::Base
  has_many :seats, dependent: :destroy
  has_many :players, -> {uniq}, through: :seats

  def add_player (player)
    players << player
  end

  def remove_player (player)
    players.delete(player)
  end
end
