class UsersController < ApplicationController
  def index; end

  def show; end

  def new
    user = User.new(user_params)
  end

  def create; end

  def update; end

  def edit; end

  def delete; end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
