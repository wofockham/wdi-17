namespace :twitter do
  desc 'Removes all Users and Tweets'
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
    Rake::Task['twitter:stats'].invoke
  end

  task :stats => :environment do
    puts "Users: #{ User.count }, Tweets: #{ Tweet.count }"
  end

  desc "Populate the Tweet and User tables with Faker data"
  task :populate, [:user_count] => :environment do |t, args|
    FactoryGirl.create_list :user_with_tweets, args[:user_count].to_i
    Rake::Task['twitter:stats'].invoke
  end

  desc "Populate the Tweet table with real data"
  task :search, [:query, :count] => :environment do |t, args|
    # Your code goes here.
  end
end
