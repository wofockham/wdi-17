Rails.application.routes.draw do
  root :to => 'pages#index'
  get '/test' => 'pages#test'
  get '/brother' => 'pages#brother'
end
