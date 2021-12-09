class UsersController < ApplicationController
  before_action :is_user, only: [:show, :edit, :update, :destroy] #Acciones que manda a llamar is_user
  def new
    @user= User.new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def delete
    @user.destroy
    redirect_to root_path
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def is_user
    @user = User.find_by_id(params[:id])
  end
end
=begin
def create
  @user = User.new(user_params)
  if @user.save
    session[:user_id] = @user.id
    redirect_to user_path(@user)
  else
    render :new
  end
end

def edit
  if !login || !@user
    redirect_to root_path
  end
end

def update
  if @user
    @user.update(user_params)

    if @user.errors.any?
      render "edit"
    else
      redirect_to user_path(@user)
    end
  else
    render "edit"
  end
end
=end



