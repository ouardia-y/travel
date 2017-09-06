var travels = {
    "locations": [{
        "imageUrl": "pictures/ottawa.jpg",
        "imageAlt": "Ottawa Parliament",
        "name": "Ottawa",
        "date": "September 2001 - Moved",
        "location": {"lat": 45.423627, "lng": -75.700977}
    },
                  {
                      "imageUrl": "pictures/montreal.jpg",
                      "imageAlt": "Montreal",
                      "name": "Montreal",
                      "date": "August 2016 - Moved",
                      "location": {"lat": 45.511285, "lng": -73.586137}
                  },
                  {
                      "imageUrl": "pictures/quebec.jpg",
                      "imageAlt": "Quebec City",
                      "name": "Quebec City",
                      "date": "August 2016",
                      "location": {"lat": 46.825284, "lng": -71.208491}
                  },
                  {
                      "imageUrl": "pictures/kingston.jpg",
                      "imageAlt": "Kingston",
                      "name": "Kingston",
                      "date": "July 2014",
                      "location": {"lat": 44.232126, "lng": -76.493802}
                  },
                  {
                      "imageUrl": "pictures/toronto.jpg",
                      "imageAlt": "CN Tower",
                      "name": "Toronto",
                      "date": "August 2011",
                      "location": {"lat": 43.643702, "lng": -79.387220}
                  },
                  {
                      "imageUrl": "pictures/niagarafalls.jpg",
                      "imageAlt": "Niagara Falls",
                      "name": "Niagara Falls",
                      "date": "August 2011",
                      "location": {"lat": 43.078934, "lng": -79.078475}
                  },
                  {
                      "imageUrl": "pictures/nyc.jpg",
                      "imageAlt": "NYC",
                      "name": "New York City",
                      "date": "May 2013",
                      "location": {"lat": 40.777026, "lng": -73.971968}
                  },
                  {
                      "imageUrl": "pictures/nj.jpg",
                      "imageAlt": "NJ",
                      "name": "New Jersey",
                      "date": "May 2013",
                      "location": {"lat": 40.728519, "lng": -74.068752}
                  },
                  {
                      "imageUrl": "pictures/columbus.jpeg",
                      "imageAlt": "Columbus",
                      "name": "Columbus, Ohio",
                      "date": "May 2015",
                      "location": {"lat": 39.974975, "lng": -82.998391}
                  },
                  {
                      "imageUrl": "pictures/pittsburgh.jpg",
                      "imageAlt": "Pittsburgh, PA",
                      "name": "Pittsburgh, PA",
                      "date": "March 2016",
                      "location": {"lat": 40.423314, "lng": -80.015399}
                  },
                  {
                      "imageUrl": "pictures/neworleans.jpg",
                      "imageAlt": "New Orleans, LA",
                      "name": "New Orleans, LA",
                      "date": "May 2017",
                      "location": {"lat": 29.957491, "lng": -90.064189}
                  },
                  {
                      "imageUrl": "pictures/bejaia.jpg",
                      "imageAlt": "Bejaia, Algeria",
                      "name": "Bejaia, Algeria",
                      "date": "January 1994 - Born",
                      "location": {"lat": 36.769013, "lng": 5.082559}
                  },
                  {
                      "imageUrl": "pictures/algiers.jpg",
                      "imageAlt": "Algiers, Algeria",
                      "name": "Algiers, Algeria",
                      "date": "September 2001",
                      "location": {"lat": 36.745885, "lng": 3.069741}
                  }
                 ],
    "display": function () {
        var highlightsArray = [0,1,2,3,4,5]; //array for highlights, need 3
        var item = 0;
        for (i = 0; i < (highlightsArray.length/3); i++) {
            //add row
            $("#location").append(HTMLrowStart(i));

            //add 3 pics per row
            for (count=0; count < 3; count++) {
                var number = highlightsArray[item];
           
                $(".location-row-" + i).append(HTMLitemStart);

                var formattedImageUrl = HTMLimageUrl.replace("%data%", travels.locations[number].imageUrl);
                var formattedImageAlt = HTMLimageAlt.replace("%data%", travels.locations[number].imageAlt);
                var formattedImageStuff = formattedImageUrl + formattedImageAlt;
                $(".col-md-4:last").append(formattedImageStuff);

                var formattedLocationName = HTMLlocationName.replace("%data%", travels.locations[number].name);
                $(".col-md-4:last").append(formattedLocationName);

                var formattedDate = HTMLlocationDate.replace("%data%", travels.locations[number].date);
                $(".col-md-4:last").append(formattedDate);
                item++;
            }
        }
    }
};

$("#mapDiv").append(googleMap);
travels.display();