require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# Index
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

get '/butterflies/new' do
  erb :butterflies_new
end

post '/butterflies' do
  # Insert the butterfly data from the form into the database
  query = "INSERT INTO butterflies (name, family, image) VALUES ('#{ params['name'] }', '#{ params['family'] }', '#{ params['image'] }')"
  query_db query
  redirect '/butterflies'
end

get '/butterflies/:id' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id = #{ params['id'] }"
  @butterfly = @butterfly.first
  erb :butterflies_show
end

get '/butterflies/:id/delete' do
  # Delete the butterfly from the Database
  query_db "DELETE FROM butterflies WHERE id = #{ params['id'] }"
  redirect '/butterflies'
end

get '/butterflies/:id/edit' do
  # Fetch the current butterfly data from the DB
  @butterfly = query_db "SELECT * FROM butterflies WHERE id = #{ params['id'] }"
  @butterfly = @butterfly.first # Pluck the butterfly hash from the array
  erb :butterflies_edit
end

post '/butterflies/:id' do
  query = "UPDATE butterflies SET name='#{ params['name'] }', family='#{ params['family'] }', image='#{ params['image'] }' WHERE id = #{ params[:id] }"
  query_db query
  redirect "/butterflies/#{ params[:id] }"
end

def query_db(sql)
  db = SQLite3::Database.new 'butterflies.db'
  db.results_as_hash = true

  puts sql

  result = db.execute sql
  db.close

  result # Implicit return
end
