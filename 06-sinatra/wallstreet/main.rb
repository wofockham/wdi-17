require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  erb :form
end

get '/quote' do
  @symbol = params[:stock_symbol].upcase
  stock_data = YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)
  @price = stock_data[@symbol].lastTrade
  erb :quote
end
