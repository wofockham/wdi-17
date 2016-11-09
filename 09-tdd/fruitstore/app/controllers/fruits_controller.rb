class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all.reverse
    respond_to do |format|
      format.html {} # Follow the default behaviour of rendering a view with the same name as the action.
      format.json { render :json => @fruits }
    end
  end
end
