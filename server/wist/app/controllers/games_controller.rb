class GamesController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_action :set_game, only: [:show, :edit, :update, :destroy, :join, :leave]
  before_action :set_player

  # GET /games
  # GET /games.json
  def index
    @games = Game.includes(:players)
    @gameslist = []
    @games.each do |game|
      @gameslist.push( { "name" => game.name,
                         "players" => game.players.count,
                         "scored" => game.scored,
                         "locked" => game.password.nil?,
                         "playing" => game.playing } )
    end
    render json: @gameslist
  end

  # GET /games/1
  # GET /games/1.json
  def show
    render json: @game
  end

  # GET /games/new
  def new
    @game = Game.new
    @game.add_player(@player)
  end

  # GET /games/1/edit
  def edit
    render json: @game
  end

  # POST /games/1/join
  def join
    @game.add_player(@player)
    render json: @game
  end

  # POST /games/1/leave
  def leave
    @game.players.destroy(@player)
    render json: @game
  end

  # POST /games
  # POST /games.json
  def create
    @game = Game.new(game_create_params)

    respond_to do |format|
      if @game.save
        format.html { redirect_to @game, notice: 'Game was successfully created.' }
        format.json { render :show, status: :created, location: @game }
      else
        format.html { render :new }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /games/1
  # PATCH/PUT /games/1.json
  def update
    respond_to do |format|
      if @game.update(game_create_params)
        format.html { redirect_to @game, notice: 'Game was successfully updated.' }
        format.json { render :show, status: :ok, location: @game }
      else
        format.html { render :edit }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /games/1
  # DELETE /games/1.json
  def destroy
    @game.destroy
    respond_to do |format|
      format.html { redirect_to games_url, notice: 'Game was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.find(params[:id])
    end

    def set_player
      #TODO actually an exception is the good thing to do
      playerId = request.headers["HTTP_PLAYER_ID"]
      begin 
        @player = Player.find(playerId)
      rescue
        @player = nil
      end
    end

    def game_create_params
      params.require(:game).permit(:name, :player, :scored, :password)
    end
end
