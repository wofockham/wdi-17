require 'sinatra'
require 'sinatra/reloader'

get '/hello' do
  "Greetings from a dynamic server"
end

get '/' do
  "Hello World"
end

get '/name/:firstname' do
  "Hello #{ params[:firstname] }"
end

get '/name/:first/:last' do
  "Hello #{ params[:first] } #{ params[:last].upcase }, Your Majesty"
end

get '/name/:first/:last/:age' do
  "Your name is #{ params[:first] } #{ params[:last] } and your age is #{ params[:age] }"
end

get '/multiply/:x/:y' do
  result = params[:x].to_i * params[:y].to_i
  "the result is #{ result }"
end
