class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.find_by_id(params[:id])
  end

  def new
    User.new(user_params)
  end

  def create
    user = User.create(user_params)

    render json: user.errors, status: 400 and return if !user.save
    
    render json: user
  end

  def update
    user = User.find_by_id(params[:id])
    user.update(user_params)
    
    render json: user.errors, status: 400 and return if !user.save

    render json: user, status: 201
  end

  def edit
    User.find_by_id(params[:id])
  end

  def destroy
    user = User.find_by_id(params[:id])

    render json: user.errors, status: 500 and return if !user.destroy

    render json: user
  end

  private

  def user_params
    params.permit(:username, :email, :password_digest)
  end
end
