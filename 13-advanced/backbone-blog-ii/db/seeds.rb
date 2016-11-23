Post.destroy_all
Comment.destroy_all

p1 = Post.create :title => 'Post 1', :author => 'Dickens', :content => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

p2 = Post.create :title => 'Post 2', :author => 'Tolkein', :content => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

p1.comments.create :title => 'Cool', :author => 'Anonymous', :content => 'Cool post'

p2.comments.create :title => 'Nice', :author => 'Anonymous', :content => 'Nice post'
p2.comments.create :title => 'Ace', :author => 'Biggles', :content => 'Ace post'
