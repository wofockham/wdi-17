# == Route Map
#
#   Prefix Verb   URI Pattern          Controller#Action
#     root GET    /                    pages#home
#    users POST   /users(.:format)     users#create
# new_user GET    /users/new(.:format) users#new
#    login GET    /login(.:format)     session#new
#          POST   /login(.:format)     session#create
#          DELETE /login(.:format)     session#destroy
#

Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/users/edit' => 'users#edit', :as => 'edit_user'
  resources :users, :only => [:new, :create, :index, :update, :show]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
