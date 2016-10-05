class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 234.006
    @large_number = 234893853
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a
    @friend_count = 1
    @enemy_count = 2
    @story = 'A very long long long long long time ago in a galaxy far far far far far away'
  end

  def assets
  end

  def url
  end
end
