# FakeOS WindowsXP Project

Welcome to the FakeOS WindowsXP project! This project is a simulation of the Windows XP desktop environment, complete with various desktop icons, a start menu, and functional applications like Notepad and Media Player.

## Table of Contents
- Introduction
- Features
- Installation
- Usage
- Development
- Technologies Used

## Introduction

This FakeOS WindowsXP project aims to recreate the classic Windows XP user interface in a web environment. This project provides a nostalgic experience for users and demonstrates how modern web technologies can be used to simulate traditional desktop environments.

## Features

- **Desktop Icons**: Clickable icons on the desktop that open various applications.
- **Start Menu**: A functional start menu with links to various applications and settings.
- **Notepad**: A simple text editor where users can write, edit, and save text files.
- **Media Player**: A media player that can play, pause, and navigate through a list of media files.
- **My Pictures**: A picture viewer with a thumbnail gallery and carousel view.

## Installation

To install and run this project locally, follow these steps:

1. **Clone the Repository**:
   
    git clone https://github.com/your-username/fakeos-windowsxp.git
    cd fakeos-windowsxp
   

2. **Install Dependencies like SCSS**:
   
    npm install -D sass
    


3. **Run the Project**:
    ```sh
    npm start
    ```

## Usage

After starting the project, open your web browser and navigate to `http://localhost:5500` (or the appropriate port) to see the FakeOS WindowsXP interface.

### Desktop Icons

- **Notepad**: Opens the Notepad application.
- **Media Player**: Opens the Media Player application.
- **My Pictures**: Opens the picture viewer.

### Start Menu

Click on the "Start" button to open the start menu. The start menu includes links to various applications and settings.

### Notepad

- **Write and Edit Text**: Use the Notepad application to write and edit text.
- **Save Files**: Save your text to a file.

### Media Player

- **Play Media**: Play, pause, and navigate through media files using the Media Player.

### My Pictures

- **Thumbnail Gallery**: View pictures as thumbnails.
- **Carousel View**: Double-click a thumbnail to open the carousel view and navigate through pictures.

## Development

### Changes and Accomplishments

1. **Initial Setup**: Set up the project structure and installed necessary dependencies.
2. **Desktop Icons**: Added clickable desktop icons with event listeners to open applications.
3. **Start Menu**: Created a functional start menu with links to various applications.
4. **Notepad**: Developed the Notepad application with basic text editing and saving functionality.
5. **Media Player**: Implemented the Media Player with play, pause, previous, and next track functionality.
6. **My Pictures**: Added the picture viewer with a thumbnail gallery and carousel view.
7. **Styling**: Applied SCSS for styling and ensuring the interface mimics Windows XP.
8. **Modularization**: Separated the code into different modules for better maintainability (e.g., `mediaPlayer.js`, `notepad.js`, `myPictures.js`).

### How I Accomplished the Tasks

- **Event Listeners**: Used JavaScript event listeners to handle user interactions with desktop icons and start menu.
- **Modal Windows**: Created modals for different applications to simulate the windowed interface of Windows XP.
- **Media Control**: Implemented media control functionality using the HTML5 `<video>` element and JavaScript.
- **Styling with SCSS**: Used SCSS to style the project and ensure the look and feel resemble Windows XP.
- **Code Modularization**: Organized code into separate modules for each application, making the project easier to manage and extend.

## Technologies Used

- **HTML5**
- **CSS3 / SCSS**
- **JavaScript**
- **npm**
- **Git**