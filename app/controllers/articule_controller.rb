class ArticuleController < ApplicationController
  def filtered
    @q = params[:q]
    if @q
      @articules = Articule.where(:titulo => @q)
    else
      @articules= Articule.all
    end
  end
end
