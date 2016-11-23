json.extract! post, :id, :author, :title, :content, :created_at, :updated_at
json.comments post.comments
json.url post_url(post, format: :json)
