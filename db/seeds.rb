# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Video.destroy_all
Comment.destroy_all
Like.destroy_all
ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

# Users
User.create(username: 'demo', password: 'password', email:'jane@demoemail.com', first_name: 'Jane', last_name: 'McDemo', profile_image_url: 'https://i.ibb.co/x8170Cw/1516927665677-e-2159024400-v-beta-t-Rx-N5n-z8rd8da6-Wvi-LYt-F5-Ke-Tvv-Jib-FL1sw-NI45-QTo-U.jpg')
User.create(username: 'hollyjphilly', password: 'password', email:'hello.hollyphillips@gmail.com', first_name: 'Holly', last_name: 'Phillips', profile_image_url: 'https://avatars.githubusercontent.com/u/61254925?v=4')
User.create(username: 'banana', password: 'password', email:'banana@peel.com', first_name: 'bana', last_name: 'na', profile_image_url: 'https://i.ibb.co/XDTygG1/image.png')
User.create(username: 'dinosaur', password: 'asteroid', email:'tee@rex.com', first_name: 'dino', last_name: 'saurus')


# Videos
vid1 = Video.create!(title: "Hype Feature Tour - MERN Stack Project", 
    description: "HYPE is a social networking app for adults who haven't outgrown schoolyard games.", 
    uploader_id: 2)
file = open("https://yourtube-seeds.s3.amazonaws.com/hype.mp4")
vid1.moviefile.attach(io: file, filename: "hype.mp4")
file = open("https://yourtube-seeds.s3.amazonaws.com/hypethumb.png")
vid1.thumbnail.attach(io: file, filename: "hypethumb.png")

vid2 = Video.create!(title: "How I Got Into Software Engineering (in 60 seconds)", description: "Transcription: When the pandemic hit in March 2020, I was working for Dida Academy, a progressive learning center in Brooklyn, NY. The onset of quarantines meant my students and I had to transition to a remote classroom almost overnight. Being someone who loves to play with new tech, I used Glide ,a platform I had been teaching myself at the time, to build my students a web app that could serve all the functionality needed for an online classroom. I built the app in less than a week and then onboarded parents, students, and staff who continued to use it into this school year. Even after the app was deployed, I found myself still thinking about features I could add and googling all sorts of questions about APIs and data structures. At that point I began thinking, maybe this is something I should go into? And that’s how my journey into Software Engineering began. Since building the app, I’ve learned more about data structures, algorithms, multiple programming languages, and am fluent in more web stacks than I would have thought possible a year or two ago. I’m super excited to make an impact just like I did with the Dida Academy app as I continue my career in Software Engineering.", uploader_id: 2)
file = open("https://yourtube-seeds.s3.amazonaws.com/dida.mp4")
vid2.moviefile.attach(io: file, filename: "dida.mp4")
file = open("https://yourtube-seeds.s3.amazonaws.com/didathumb.png")
vid2.thumbnail.attach(io: file, filename: "didathumb.png")

vid3 = Video.create!(title: "Pokesweeper Official Trailer", description: "A Pokemon-themed minesweeper game. Play at: https://hollyjphilly.github.io/Pokesweeper/", uploader_id: 2)
file = open("https://yourtube-seeds.s3.amazonaws.com/pokesweeper.mp4")
vid3.moviefile.attach(io: file, filename: "pokesweeper.mp4")
file = open("https://yourtube-seeds.s3.amazonaws.com/pokethumb.png")
vid3.thumbnail.attach(io: file, filename: "pokethumb.png")


# Comments
com1 = Comment.create!(body: "what a ride", commenter_id: 2, video_id: 1)
com2 = Comment.create!(body: "amazing stuff", commenter_id: 3, video_id: 1)
Comment.create!(body: "wowza, oh my", commenter_id: 3, video_id: 1)
Comment.create!(body: "I know right!", commenter_id: 1, video_id: 1, parent_comment_id: 1)
Comment.create!(body: "a sweet ride :)", commenter_id: 2, video_id: 1, parent_comment_id: 1)
Comment.create!(body: "hope you like it", commenter_id: 2, video_id: 2)
Comment.create!(body: "this looks great!", commenter_id: 3, video_id: 2)
Comment.create!(body: "I thoroughly", commenter_id: 3, video_id: 3)
Comment.create!(body: "enjoy commenting", commenter_id: 3, video_id: 3)
Comment.create!(body: "on my own videos", commenter_id: 3, video_id: 3)


#Likes
com1.likes << Like.new(liker_id: 1, kind: "like")
com2.likes << Like.new(liker_id: 2, kind: "dislike")
vid1.likes << Like.new(liker_id: 1, kind: "like")
vid1.likes << Like.new(liker_id: 3, kind: "like")