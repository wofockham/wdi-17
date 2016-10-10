Genre.destroy_all
g1 = Genre.create :name => 'Jazz'
g2 = Genre.create :name => 'Chamber pop'
g3 = Genre.create :name => 'Post pop'

Artist.destroy_all
ar1 = Artist.create :name => 'John Coltrane'
ar2 = Artist.create :name => "Rachel's"
ar3 = Artist.create :name => 'Britney Spears'

Album.destroy_all
al1 = Album.create :title => 'Giant Steps'
al2 = Album.create :title => 'Systems/Layers'
al3 = Album.create :title => 'In The Zone'

Song.destroy_all
s1 = Song.create :name => 'Naima'
s2 = Song.create :name => 'Expect Delays'
s3 = Song.create :name => 'Toxic'

User.destroy_all
u1 = User.create :email => 'jonesy@gmail.com', :name => 'Jonesy', :password => 'chicken', :password_confirmation => 'chicken', :admin => true
u2 = User.create :email => 'cragisy@gmail.com', :name => 'Craigsy', :password => 'chicken', :password_confirmation => 'chicken'
u3 = User.create :email => 'bessy@gmail.com', :name => 'Bessy', :password => 'chicken', :password_confirmation => 'chicken'

Mixtape.destroy_all
m1 = Mixtape.create :title => 'Code Jams'
m2 = Mixtape.create :title => 'Fire Escape Music'
m3 = Mixtape.create :title => 'Makeout Songs'

g1.songs << s1
s2.genres << g2
g3.songs << s3
s3.genres << g1

# s1.artist = ar1 # WILL NOT UPDATE THE DB
# s1.artist_id = ar1.id # WILL NOT UPDATE THE DB
# s1.save # Required to save the above to the DB
ar1.songs << s1
ar2.songs << s2
ar3.songs << s3

al1.songs << s1
al2.songs << s2
al3.songs << s3

m1.songs << s1 << s2 << s3 << s3
m2.songs << s1 << s2
m3.songs << s1 << s3

u1.mixtapes << m1 << m2
u2.mixtapes << m3
