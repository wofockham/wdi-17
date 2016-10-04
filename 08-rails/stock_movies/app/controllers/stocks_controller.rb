class StocksController < ApplicationController
  def form
  end

  def quote
    stock_info = YahooFinance::get_quotes( YahooFinance::StandardQuote, params[:symbol] )
    @price = stock_info[ params[:symbol] ].lastTrade
  end
end
