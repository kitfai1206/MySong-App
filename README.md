My Songs Management System

Group: 81
Name: 
WONG KIT FAI (11674976)

Application link: https://my-song-app.onrender.com/

********************************************
# CRUD service
- Create
-   A Song object may contain the following attributes with an example:
	1)	Title (Bad Romance)
    2)  Singer (Lady Gaga)
    3)  Language (English)
    4)  In Playlist (Yes)


-   A Singer object may contain the following attributes with an example:
	1)	Name (Lady Gaga)
    2)  Gender (Female)

All attributes are mandatory

Create operation is post request, and all information is in body of request.

********************************************
# CRUD service
- Read
-  There are two options to read and find singers or songs by listing all information or viewing by song or singer id.

1) List all information
    index.ejs will used to display all the songs or singers

2) Viewing by song or singer
    simply click on the view buttton on index.ejs and it will directed to show.ejs to
    display specific singer or song information

********************************************
# CRUD service
- Update
-   The user can update all the attributes of song or singer except their ids.
-   The user can also update the attribute of 'In playlist' to specific if he/she wants the song in the playlist

********************************************
# CRUD service
- Delete
-   The user can delete specific song or singer
-   One exception is that if the singer still has song in library,
    the singer is not able to be delete until the songs are removed.

********************************************
# Restful
In this project, there are three HTTP request types, post, get and delete.
- Post 
	Post request is used for insert.
	Path URL: /songs/new

- Get
	Get request is used for find.
	Path URL: /songs/:id

- PUT 
    Put request is used for edit or update.
    In this project, method override is used to imitating POST method to perform PUT
    Path URL: /songs/:id/edit

- Delete
	Delete request is used for deletion.
    In this project, method override is used to imitating POST method to perform DELETE
	Path URL: /songs/:id/edit

*******************************************

Application Description

The app is used to manage favourite songs from the user, including a library to store all the songs
and a playlist to store the selected songs.
By implementing the CRUD operations, these information can be changed whenever the user wants to.