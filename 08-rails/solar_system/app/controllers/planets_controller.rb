class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end

  def new
  end

  def create
    Planet.create planet_params
    redirect_to planets_path
  end

  private
  def planet_params # Strong Parameters
    params.require(:planet).permit(:name, :image, :orbit, :diameter, :mass, :moons)
  end
end
