Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/movies' => 'movies#form'
  get '/movies/poster' => 'movies#poster'

  get '/stocks' => 'stocks#form'
  get '/stocks/quote' => 'stocks#quote'
end
