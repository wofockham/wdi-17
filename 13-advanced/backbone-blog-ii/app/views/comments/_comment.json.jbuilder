json.extract! comment, :id, :author, :title, :content, :post_id, :created_at, :updated_at
json.url comment_url(comment, format: :json)
