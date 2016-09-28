require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :form
end

get '/calc' do
  @x = params[:x].to_f
  @y = params[:y].to_f

  @result = case params[:operator]
  when '+' then @x + @y
  when '*' then @x * @y
  # Add other cases here
  end

  erb :calc
end

get '/about' do
  erb :about
end
