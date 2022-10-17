//Adding or Removing CSS Classes
/*
$(function() {
 
  $("a").addClass("fancy-lik");
  $("p:first").addClass("large emphasize");

  $("li li").addClass(function(index){
    $(this).addclass("item- "+ index);
  });

  $("div").addClass(function(index, currentClass){
    if(currentClass === "dummy"){
      return "red-box";
    }
  });

  $(".red-box").removeClass("red-box").addClass("blue-box");

  $(".dummy").removeClass("dummy").addClass("green-box");

});
*/

//Changing the Data of an Element 
/*
$(function(){
  var gallery = $(".gallery");
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];
  gallery.data("availableImages", images)
  console.log(gallery.data("availableImages"));
  gallery.data("name", "The awesome Gallery");
  console.log(gallery.data())


  gallery.removeData("name");

  var firstPar = $("p:first")
  console.log(firstPar.data("myData")) // will log out "Some data"
})
*/

//Retrieving and changing the content of an element 
/*
$(function(){
  //text(), html()
  var firstPar = $("p:first")
  console.log(firstPar.text())//will return only the text within the p tag
  console.log(firstPar.html())// will return text and all other tags within the p tag
  console.log($("p").html());//will only return the first p tag 
  
  firstPar.text("<strong>Hello</strong> World!")
  firstPar.html("<strong>Hello</strong> World!");

  //how to append html to already existing html
  firstPar.html(firstPar.html()+"<strong> Hello</strong> World!")
})
*/

//Adding Click Handlers 
/*
$(function(){
  $("#btn-click").click(function(){
    alert("Button was clicked.")
  })
})
*/

//Adding Hover Handlers and 
//adding mouse enters and mouse leaves handler 
/*
$(function(){
  $("#btn-hover").hover(function(){
    alert("Button was hovered.");
  });

  $(".green-box").hover(function(){
    $(this).text("I was hovered")
  })

  $(".blue-box").hover(function(){
    $(this).mouseenter(function(){
      $(this).stop().fadeTo(500,0.7);
    });
    $(this).mouseleave(function(){
      $(this).stop().fadeTo(500,1);
    })
  })

  //hover(handlerIn, handlerOut)
  $(".blue-box").hover(function(){
    $(this).stop().fadeTo(500,0.7)
  }, function(){
    $(this).stop().fadeTo(500,1)
  })
});
*/

//Adding handler for multiple events
/* 
$(function(){
  $("html").on("click keydown", function(){
    console.log("Mouse was clicked or key was pressed")
  })

  var gallery = $(".gallery").find("img");
  var i = 0;
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];


  $(gallery).on("click keydown", function(){
    i = (i +1) % images.length;
    $(this).fadeOut(function(){
      $(this).attr("src", images[i]).fadeIn();
    })
  })

  //another way to write the above 
  gallery.on("click", fadingImages)
  function fadingImages(){
    i = (i +1) % images.length;
    gallery.fadeOut(function(){
      gallery.attr("src", images[i]).fadeIn();
    })
  }

})
*/

//Delegated Events
/*
$(function(){
  $("#content").on("click", "p", function(){
    $(this).slideUp();
  })
  $("#content").append("<p>This is a dynamically added paragrah</p>")

  $("body").on("mouseenter","li", function(){
    $(this).css("color", "green")
  })

})
*/

//Passing Additional data to events 
/*
$(function(){
  $("#btn-click").click({ user: "Peter", domain: "petersommerhoff.com"}, function(event){
    greetUser(event.data);
  })

  function greetUser(userdata){
    username = userdata.user || "Anonymous";
    domain = userdata.domain || "example.com"
    alert("Welcome back " + username + " from " + domain 
    + "!");
  }
})
*/

//Creatiing an image gallery with light box preview 
/*
$(function(){
  var galleryImages = $(".gallery").find("img");
  galleryImages.css("width", "33%").css("opacity", "0.7")

  galleryImages.mouseenter(function(){

    $(this).stop().fadeTo(500, 1);
  })

  galleryImages.mouseleave(function(){

    $(this).stop().fadeTo(500, 0.7);
  })

  galleryImages.click(function(){
    var source = $(this).attr("src");
    var image = $("<img>").attr("src", source).css("width", "100%")
    $(".lightbox").empty().append(image).fadeIn(2000)
  })

  $(".lightbox").click(function(){
    $(this).stop().fadeOut()
  })
})
*/

//Handling KeyDown & KeyUp Events 
/*
$(function(){
  $("html").keydown(function(event){
    console.log(event.which)
  })

  var ARROW_RIGHT  =39;
  $("html").keydown(function(event){
    if(event.which == ARROW_RIGHT){
      $(".blue-box").stop().animate({
        marginLeft: "+=10px"
      }, 50)
    }
  })
})*/

//The focus and blur events 
/*
$(function(){
  var inputFields = $("input:text, input:password, textarea");
  inputFields.focus(function(){
    $(this).css("box-shadow", "0 0 4px #666")
  })

  inputFields.blur(function(){
    $(this).css("box-shadow", "none")
  })

inputFields.blur(function(){
  var text = $(this).val();
  if(text.length < 3){
    $(this).css("box-shadow", "0 0 4px #811")
  }else{
    $(this).css("box-shadow", "0 0 4px #181")
  }
})
})
*/

//Using the change event 
/*
$(function(){
  $("#checkbox").change(function(){
    var isChecked = $(this).is(":checked");
    if(isChecked){
      $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181")
    }else{
      $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811")
    }
  })

  $("select").change(function(){
    var selectedOption = $(this).find(":selected").text();
    alert(selectedOption)
  })
})
*/

//Handling the submit event 
/*
$(function(){
  $("#form").submit(function (event){
    var textarea = $("#message");
    if(textarea.val().trim() == ""){
      textarea.css("box-shadow", "0 0 4px #811");
      event.preventDefault();
    }else{
      //form will be submitted.
    }
  })
})
*/

//Complete form Validation on submit 
/*
$(function(){
  $("#form").submit(function(event){
    var form = $("#form");
    enableFastFeedback(form);

    var name = $("#name").val();
    var password = $("#password").val();
    var message = $("#message").val();
    var checked = $("#checkbox").is(":checked");

    
    validatedNameField(name, event);
    validatePasswordField(password, event);
    validateMessageField(message, event);
    validateCheckedField(checked, event);

  });
});

function enableFastFeedback(formElement){
  var nameInput = formElement.find("#name");
  var passwordInput = formElement.find("#password");
  var messageInput = formElement.find("#message");
  var checkedInput = formElement.find("#checkbox");

  nameInput.blur(function (event){
    var name = $(this).val();
    validatedNameField(name, event);

    if(!isValidName(name)){
      $(this).css({
        "box-shadow": "0 0 4px #811", "border": "1px solid #600"})
    }else{
      $(this).css({
        "box-shadow": "0 0 4px #181", "border": "1px solid #060"})
    }
  })
  
}

function validateNameField(name, event){
  if(!isValidName(name)){
    $("#name-feedback").text("Please enter at least two characters");
    event.preventDefault();
  }else{
    $("#name-feedback").text("");
  }
}

function isValidName(name){
  return name.length >= 2;
}

function validatePasswordField(password, event){
  if(!isValidPassword(password)){
    $("#password-feedback").text("Please enter at least two characters");
    event.preventDefault();
  }else{
    $("#password-feedback").text("");
  }
}

function isValidPassword(password){
  return password.length >= 6 && /.*[0-9]..test(password);
}


function validateMessageField(message, event){
  if(!isValidMessage(message)){
    $("#message-feedback").text("Please enter at least two characters");
    event.preventDefault();
  }else{
    $("#message-feedback").text("");
  }
}

function isValidMessage(message){
  return message.trim != "";
}

function validateCheckedField(checked, event){
  if(!checked){
    $("#checkbox-feedback").text("Please check this box");
    event.preventDefault();
  }else{
    $("#checkbox-feedback").text("");
  }
}
*/

//Fetching a server file with jQuery
/*
$(function(){
  //$.get(), $post(), $a.jax(),$get.JSON, $.load

  $("#code").load("js/script.js")

  $("#code").load("idontexist.php", function(response, status){
    if(status == "error"){
      alert("could not find idontexist.php");
    }
    console.log(response);
  })
})
*/

//Retrieving Flickr images through the FLickr API (+Understanding JSON)
/*
$(function(){
  //JSON, $.getJSON()
  
  var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON(flickrApiUrl, {
    //options...
    tags: "sun, beach",
    tagmode: "any",
    format: "json"
  }).done(function(data){
    //success function 
    console.log(data);
    //only 5 items will be append to the flickr div tag 
    $.each(data.items, function(index, item){
      console.log(item)
      $("<img>").attr("src", item.media.m).appendTo("#flickr");

      if(index == 4){
        return false;
      }
    })
  }).fail(function(){
    //failure function 
    alert("Ajax call failed");
  });
});
*/

//Retrieving Pokemon Data from the pokeAPI
//Improving the Pokedex
$(function(){
  var pokeapiUrl = "https://pokeapi.co/api/v2/generation/1"
  var pokemonByName = "https://pokeapi.co/api/v2/pokemon"

  $.getJSON(pokeapiUrl).done(function(data){
    console.log(data)
    $.each(data.pokemon_species, function(index, pokemon){
      var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
      var par = $("<p>").html("Pokemon species no." + (index+1) + " is ").append(link);

      link.click(function(event){
        $get.JSON(pokemonByName + pokemon.name).done(function(details){
          console.log(details)
          var pokemonDiv = $("#pokemon-details");
          pokemonDiv.empty();
          pokemonDiv.append("<h2>" + name + "</h2>")
          pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
        });
        event.preventDefault();
      })
      par.appendTo("#pokemon")
    })
  }).fail(function(){
    alert("Request to pokeapi failed");
  }).always(function(){
    console.log("Pokemon is awesome.");
  })
})