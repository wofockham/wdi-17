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

get '/butterflies/new' do
  erb :butterflies_new
end

get '/butterflies/:id' do
  # Fetch this specific butterfly from the DB
  db = SQLite3::Database.new 'butterflies.db'
  db.results_as_hash = true

  @butterfly = db.execute "SELECT * FROM butterflies WHERE id = #{ params['id'] }"
  @butterfly = @butterfly.first

  erb :butterflies_show
end
