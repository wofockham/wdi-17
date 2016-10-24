Rails.application.routes.draw do
  get 'pages/index'

  root :to => 'pages#index' # This is where our SPA will live
  resources :posts # Classic CRUD system
end
