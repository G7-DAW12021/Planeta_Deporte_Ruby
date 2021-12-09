class ApplicationController < ActionController::Base
=begin
  helper_method :login
  helper_method :current_user

  def current_user
    User.find_by(id: session[:user_id])
  end

  def login
    !current_user.nil?
  end
=end
end

