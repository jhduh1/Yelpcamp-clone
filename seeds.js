var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment   = require("./models/comment");
 
var data = [
    {
        name: "Riften", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrzD3f4dGW2dvHjizvh9cjd9k-thK7iRMoBrcTKJhtj7POFFS3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Whiterun", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmPTgIUS8MXIFu30C--gX3tClzlc0w-1H63rTDOuEG7102kjIG",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Markath", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiFlAVMMWGWRfLaldaaUzuCix1UTZ9avGTHH08P5FmMsYviHFH",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
]
 
function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        // Comment.remove({}, function(err) {
        //     if(err){
        //         console.log(err);
        //     }
        //     console.log("removed comments!");
             //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    }; 
    //add a few comments

 
module.exports = seedDB;