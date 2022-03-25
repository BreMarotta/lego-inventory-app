# Family Lego Collection Inventory (React Frontend)

Repository for Ruby/Sinatra API: https://github.com/BreMarotta/phase-3-sinatra-react-project

## The Back Story

In my house, everyone and I mean EVERYONE collects Lego. Over the years, we have amassed a collection of close to 200 Lego sets. With a collection this large there is an ongoing issue of keeping track of what we have already and what we might still want. This becomes especially difficult around holidays when extended family wants to purchase a new set for one of my children. I get countless phone calls asking if we already have set x??? I can never keep track. 

This SPA came to life as a way to solve the countless phone call delimia. I designed this page to specifically be user friendly for a grandparent who just wants to make sure they aren't purchasing a duplicate set. I also had in mind my kids who are excited to see a visual representation of all of thier sets. 

## Getting Started:
First, you will need to fork and clone this repository into a local directory. Once you navigate into the correct file, run:

### `npm start`
This should open the app in your browser: 
[http://localhost:3000](http://localhost:3000)

The data for this collection is stored in a sperate GitHub connected to a Ruby database. 

## Features
The user can:

* View a home page with information about each owner (in this case family member). This information is obtained from the database and rendered dynamically onto the page:    **"/"**

* View the entire family collection. Each Lego set is rendered onto a card. The cards are color coded to denote who owns the set. Each card also has a button to trade the set owner. This trade shows up in the React App and persists to the database:    **"/lego_collection"**

* View a show page for each set. When the user clicks on an image on a set card, a show page is rendered with details of that specific Lego set:    **"/lego_collection/:id"**

* View the collection of each owner. The links in the Navigation bar are dynamically rendered from the owners table in the database. Visiting each owner's link will show the user that owner's sets:    **"/lego_collection/owners/:name"**

* Sort the sets by genre. When the user clicks on the "View Genres" Link an additional navigation bar is rendered. Each genre from the genres table is a link to view all sets that belong to that genre:    **"/lego_collection/genres/:id"**

* Use the search bar to look for a specific set. The search bar filters through all the sets of the collection looking for any name that includes what is entered. Based on which link you are under, this will further filter down what sets are displayed. 

* Add a Lego set to the collection. Add Lego Set button brings up a form to add a new Lego set to the collection. Once all data is entered into the form and submitted, the new set will be added to the React app and that addition will persist into the database on the back end:    **"/lego_collection/new"**

## Additional Information:

* Please check out the YouTube walk through video to see all the SPA features: https://youtu.be/py0fa3kAmFk

* Also check out my blog about his project: 



## Special Thanks:

* to Lego for having such an amazing product that inspires creativity and problem solving.
* my husband for having a mild Lego obsession and passing that on to me and our kids. 