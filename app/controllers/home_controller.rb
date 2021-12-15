class HomeController < ApplicationController
  def index
    if logged_in?
      redirect_to '/client/home_registered.html'
    else
      redirect_to '/client/home.html'
    end

  end
end
