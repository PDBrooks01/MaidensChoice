# MaidensChoice
API developed for viewing and reviewing dog toys! My dog Maiden seems to destroy every toy I give her. I created this app to help dog owners just like me to find toys that match the playstyles of our pups. 

****
Upcoming Features:<br>
-Adding functional star ratings to Toys Posted<br>
-Adding a way to add reviews to the site registered under the toy being reviewed<br>
-Added more beautiful styling and a recommendation list module<br>
-Adding a way to for dog owners to become friends to meet for Play Dates<br>
-Opening up the site to a larger variety of pets (cats,birds,livestock,etc)<br>
****

User Stories/Model for  Project 2

User should be able to view dog toy image and rate the toy <br>
User should be able to give a username for their rating<br>
User should be able to click 1 to 5 stars<br>
 Stretch - Users should be able to sort reviews by Dog play style<br>
 Stretch - User should be able to submit photos of the toy they purchased and where they purchased it<br>
User should be able to select their dog breed which they will rate the toy for<br>
User should be able to select multiple breeds if they have them<br>


Model
-Dog toy<br>
	-Name of Toy -String<br>
	-Brand of Toy- String<br>
	-Image of Toy - String<br>
 	-Size of Toy - Number (Which will equate to a displayed size: S,M,L,XL)<br>
	-Places where you can purchase(Optional) - Map<br>
-User Review<br>
	-Username - String<br>
	-Breed of Dog(Drop Down List)(Is this a model itself?)  - Map?<br>
	-Play Style of Dog(Checklist)(Same question as above?) - ?Map?<br>
	-Rating 1- 5 stars - Number<br>
	-Written Review - String (Should I limit characters?)<br>

Routes<br>
-Index - main page that shows images of Dog toys, name, and rating<br>
-New - creates a new review<br>
-New - adds a new toy to the list<br>   
-Create  - Post the two above<br>
-Show - Shows Toy, name, rating, list of reviews<br>
-edit  - Toy/review? Need to decided how to proceed<br>
-Destroy - delete review ^^^^<br>

WireFrames
￼<img width="621" alt="Rate This" src="https://user-images.githubusercontent.com/75276378/125528062-36cbc9c7-ac69-43a6-b7ce-e6987271dde4.png">
￼<img width="641" alt="What did your pup think of the toy" src="https://user-images.githubusercontent.com/75276378/125528146-b9a85824-0a58-40c8-91ca-067ffb2f83b4.png">
￼<img width="351" alt="Add New Toy for Review" src="https://user-images.githubusercontent.com/75276378/125528162-83007891-17f2-444d-a5a4-fdc9541dbda9.png">
￼![RESTful Routes](https://user-images.githubusercontent.com/75276378/125528179-1a1f9348-d342-4e4a-af80-86ad932ea0f0.jpeg)
