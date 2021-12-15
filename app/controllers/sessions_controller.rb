class SessionsController < ApplicationController
  def welcome
  end

  def new
  end

  def create
    @user = User.find_by(nombre: params[:nombre])
    if @user && @user.authenticate(params[:clave_digest])
      session[:user_id] = @user.id
      #redirect_to user_path(@user)
      redirect_to "/client/home_registered.html"
    else
      redirect_to '/login'
    end
  end

  def destroy
    session.clear
    redirect_to '/login'
  end
end