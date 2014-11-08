class AddPlayerIdToSeats < ActiveRecord::Migration
  def change
    add_reference :seats, :player, index: true
    add_reference :seats, :game, index: true
  end
end
