# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'banana', password: 'password', email:'banana@peel.com', first_name: 'bana', last_name: 'na', profile_image_url: 'https://i.ibb.co/XDTygG1/image.png')
User.create(username: 'dinosaur', password: 'asteroid', email:'tee@rex.com', first_name: 'dino', last_name: 'saurus')