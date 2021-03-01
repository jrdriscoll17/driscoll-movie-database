class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.find_by_id(params[:id])
  end

  def new
    user = User.new(user_params)
  end

  def create
    user = User.create(user_params)
    render json: user
  end

  def update; end

  def edit; end

  def delete; end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password_digest)
  end

end
