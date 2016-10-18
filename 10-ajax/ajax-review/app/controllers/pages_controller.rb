class PagesController < ApplicationController
  def index
  end

  def time
    render :text => Time.now
  end

  def uptime
    uptime = `uptime` # WILL NOT WORK ON HEROKU
    render :text => uptime
  end

  def info
    time = Time.now
    uptime = `uptime` # WILL NOT WORK ON HEROKU
    fortune = `fortune` # Optional!
    render :json => {
      :time => time,
      :uptime => uptime,
      :fortune => fortune
    }
  end
end
