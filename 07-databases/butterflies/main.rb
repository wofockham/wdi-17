require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# Index
get '/butterflies' do
  # Fetch all the butterflies from the DB
  db = SQLite3::Database.new 'butterflies.db'
  db.results_as_hash = true

  @butterflies = db.execute 'SELECT * FROM butterflies'

  erb :butterflies_index
end

get '/butterflies/:id' do
  "You will soon be viewing butterfly #{ params[:id] }"
end
