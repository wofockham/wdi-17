class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all.reverse
    respond_to do |format|
      format.html {} # Follow the default behaviour of rendering a view with the same name as the action.
      format.json { render :json => @fruits }
    end
  end

  def create
    @fruit = Fruit.new fruit_params
    if @fruit.save
      redirect_to @fruit
    else
      render :new
    end
  end

  private
  def fruit_params
    params.require(:fruit).permit(:name)
  end
end
