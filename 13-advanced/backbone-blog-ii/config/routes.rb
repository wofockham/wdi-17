Rails.application.routes.draw do
  resources :comments
  resources :posts

  root :to => 'pages#home'
end
