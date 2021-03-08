class SessionController < ApplicationController
   def new; end

  def create
    user = User.find_by(username: params[:username])

    if !user&.authenticate(params[:password])
      render json: 'The username or password you entered was incorrect', status: 401 and return
    end

    session[:user_id] = user.id
    render json: user
  end

  def destroy
    session.delete :user_id
  end
end
