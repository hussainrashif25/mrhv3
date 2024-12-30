export interface Project {
  title: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "iCount",
    description: "iCount, is my 4th year capstone project that used Machine Learning to help businesses track customers in physical retail locations (during the COVID epidemic). The application utilized the YOLOv3 Convolutional Neural Network for object detection and DeepSORT (Simple Online Realtime Tracking) for object tracking. Using a customized dataset, the model was trained to detect if people were to close to eachother and to display a counter of the number of people in a store.",
    url: "imgs/icount.gif",
  },
  {
    title: "Rock Paper Scissors",
    description: "Rock, Paper, Scissors is the classic game implemented as a web app using React, that leverages the use of WebSockets for multiplayer functionality. Simply join the game with an opponent, make your move and see the result! All game logic is processed through a Express.js server using a REST API. Send the link to a friend and try it out!",
    url: "imgs/rps.gif",
  },
  {
    title: "comebackinthirty",
    description:
      "Comebackinthirty is a time managment app made with Vue.js. Using the client's localstorage, the app stores your daily events in thirty minute time slots. Instead of logging events ahead of time, you would comebackinthirty to create, delete or update what you had done. In the future, I am looking forward to implementing this as mobile app by utilzing Vue Native.",
    url: "imgs/cit.gif",
  },
  {
    title: "Online Cleaning Service",
    description:
      "A school project to create a Software as a Service website for customers looking to hire cleaners. The website is created with Express.js, Handlebars.js and MongoDB for the database. The site allows for Customers and Workers to register, login, hire/deny service, withdraw payments and search for workers.",
    url: "imgs/ocs.gif",
  },
];
