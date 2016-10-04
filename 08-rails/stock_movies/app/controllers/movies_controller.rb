class MoviesController < ApplicationController
  def form
  end

  def poster
    url = "http://omdbapi.com/?t=#{ params[:title] }"
    movie_info = HTTParty.get url
    @title = movie_info['Title']
    @poster = movie_info['Poster']
  end
end
