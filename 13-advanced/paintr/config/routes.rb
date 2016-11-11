Rails.application.routes.draw do
  root :to => 'pages#canvas'
  get '/haml' => 'pages#hamlintro'
end
