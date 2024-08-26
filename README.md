This Node.js script is designed to organize files in a directory by their file extensions. It scans the directory, creates folders based on file extensions, and moves the files into their respective folders.

Features
File Organization: Automatically organizes files into folders based on their extensions.

Skips Directories: The script only processes files and skips directories.

Customizable Directory: The script runs in the current working directory, but you can change it by modifying the directoryPath variable.

How It Works
The script reads all files and folders in the specified directory.
It checks each element to determine if it's a file or a directory.
If the element is a file, it
Skips the main script file (main.js) to avoid moving itself.
Creates a folder named after the file extension (e.g., .txt files go into a txtFiles folder).
Moves the file into the corresponding folder.
If the element is a directory, the script simply skips it.

NOTE: 1.Install node.js before using the file. Write "npm i" in your terminal.

2.The script runs in the current working directory, but you can change it by modifying the directoryPath variable.
