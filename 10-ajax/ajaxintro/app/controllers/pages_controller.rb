class PagesController < ApplicationController
  def index
  end

  def test
    render :text => 'goldfish'
  end

  def brother
    render :text => %w{ groucho harpo chico zeppo gummo }.sample
  end
end
