# Fifa Players

Hi Jordi!

This is my fifa players project, I hope you like it.


## Features

This project features four players selected from different soccer clubs and shows their statistics, videos of their best plays and career history.

### Functionalities:

Maing page: Here you have a page where you can choose your fauvorite player.

Player stats: Stats of the choosen player

Player videos: Highlights of the players

Player career: A table that shows data of the career's player

Not found: A custom template for when the user enters a route that does not exist

Interceptor: Creation of a interceptor that could manage http errors

## Design

I have used mobile first design and mixxins to reuse css code.

## Assets

About the images, I consider that it is better if they are in an image repository outside github, in google drive or some other alternative. Considering that this was an exam and wanting to have them in the same project so that they can be accessed from here I have left them in the assets/images folder.


## Screenshots

### Desktop 

Navbar:

![nav-fifa](https://user-images.githubusercontent.com/83543738/229783584-62b6bcc9-e577-4baa-a409-b16a4efdee56.PNG)

Desktop body:

![body](https://user-images.githubusercontent.com/83543738/229783738-013cee26-55dd-4e12-aa15-3d4bf59175b1.PNG)

Desktop footer imported by my library:

![footer](https://user-images.githubusercontent.com/83543738/229783952-78067129-a2c9-44f7-81a5-13061354661d.PNG)


Player stats component view:

![player-stats](https://user-images.githubusercontent.com/83543738/229784755-e800b642-73a5-40d5-b0fe-a4a4791c5cbf.PNG)

Highlights component view:

![Highlights](https://user-images.githubusercontent.com/83543738/229785243-c8a71731-b335-4b28-a71a-65ef939c2fc0.PNG)

PlayerCareer component view:

![player-career](https://user-images.githubusercontent.com/83543738/229785546-4794d294-c8b8-4317-9185-fcca153224a5.PNG)


### Mobile:

Cards component:

![cardsmobil](https://user-images.githubusercontent.com/83543738/229785847-26aef3df-4113-47c7-bf16-bf1adf59f070.PNG)

Player stats:

![playerstats-mobil](https://user-images.githubusercontent.com/83543738/229786050-5c159917-057c-4cfc-a813-05df009b5a18.PNG)

Highlights:

![Highlights-mobile](https://user-images.githubusercontent.com/83543738/229786284-bab4ff7f-86de-4693-85c4-2e84c5992ce4.PNG)

Player career:

![playercareer-mobile](https://user-images.githubusercontent.com/83543738/229786483-e3321633-e2a2-40f7-aca9-ccea3b1bebd6.PNG)

 



## Instructions to installation

### Run Locally

Clone the project

```bash
  git clone https://github.com/JoseSanzMartin/fifaPlayers.git
```

Go to the project directory

```bash
  cd fifaPlayers
```

Install dependencies(this instruction will install all the necessary dependencies included in my package.json)

```bash
  npm install
```

Start the dev server and open a new window

```bash
  ng server -o
```


## Deployment

My project is available at:

https://fifa-players-alpha.vercel.app/cards-players

## Solid principles

As an example of integration of solid principles we could talk about principle I (interface segregation principle). I have used several interfaces, as it suggests that interfaces should be small and specific, rather than large and generic.

Another example is the use of the single responsability principle. In this project an example could be to pull the data read from the service to a ts file. 

## Interceptor

I have added an interceptor to control the errors, although angular already has the ability to catch path not found errors. Interceptors could be used meaningfully to pick up all kinds of errors and act one way or another depending on the error that comes to them.

## Gists

Here you can find some of my gists

https://living-mascara-e16.notion.site/My-gists-46a903f56b7146b4b01716f16b2f4364

https://gist.github.com/JoseSanzMartin

### Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Nav Color | #343A40 |
| Footer Color | #1C1F26 |
| Body background | #FFFFFF |


### Authors

- [José Sanz Martín](https://github.com/JoseSanzMartin)


### License

[MIT](https://choosealicense.com/licenses/mit/)
