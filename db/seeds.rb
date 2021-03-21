# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
Video.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('videos')
User.create(username: 'demo', password: 'password', email:'jane@demoemail.com', first_name: 'Jane', last_name: 'McDemo', profile_image_url: 'https://i.ibb.co/x8170Cw/1516927665677-e-2159024400-v-beta-t-Rx-N5n-z8rd8da6-Wvi-LYt-F5-Ke-Tvv-Jib-FL1sw-NI45-QTo-U.jpg')
User.create(username: 'banana', password: 'password', email:'banana@peel.com', first_name: 'bana', last_name: 'na', profile_image_url: 'https://i.ibb.co/XDTygG1/image.png')
User.create(username: 'dinosaur', password: 'asteroid', email:'tee@rex.com', first_name: 'dino', last_name: 'saurus')

vid1 = Video.create!(title: "Party Time", description: "This is what it feels like when you pass all aA assessments", uploader_id: 1)
file = open("https://yourtube-seeds.s3.amazonaws.com/partytime.mov")
vid1.moviefile.attach(io: file, filename: "partytime.mov")
file = open("https://yourtube-seeds.s3.amazonaws.com/partythumb.png")
vid1.thumbnail.attach(io: file, filename: "partythumb.png")

vid2 = Video.create!(title: "Let's Test Video", description: "Follow me on @bughunter on instagram", uploader_id: 2)
file = open("https://yourtube-seeds.s3.amazonaws.com/csslife.mov")
vid2.moviefile.attach(io: file, filename: "csslife.mov")
file = open("https://yourtube-seeds.s3.amazonaws.com/cssthumb.png")
vid2.thumbnail.attach(io: file, filename: "cssthumb.png")

vid3 = Video.create!(title: "Cans in a Bag", description: "Getcha head in the game, or get a can in a bag", uploader_id: 3)
file = open("https://yourtube-seeds.s3.amazonaws.com/cansinbag.mp4")
vid3.moviefile.attach(io: file, filename: "cansinbag.mp4")
file = open("https://yourtube-seeds.s3.amazonaws.com/cssthumb.png")
vid3.thumbnail.attach(io: file, filename: "cssthumb.png")

