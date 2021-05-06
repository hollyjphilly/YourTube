json.extract! user, :id, :username,:first_name,:last_name,:profile_image_url,:channel_image_url,:email
json.subscribers user.subscribers.length
json.subscriptions user.subscriptions.map{ |sub| sub.subscribee_id }
