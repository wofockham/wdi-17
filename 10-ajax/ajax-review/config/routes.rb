Rails.application.routes.draw do
  root :to => 'pages#index'
  get '/time' => 'pages#time'
  get '/uptime' => 'pages#uptime'

  get '/info' => 'pages#info'
end
