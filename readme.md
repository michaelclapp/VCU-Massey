#VCU Massey Cancer Center#
This is the template file for VCU Massey Cancer Center's website. The website is run on the [TerminalFour Content Management System](http://www.terminalfour.com/).

The site is preprocessed through a custom Gruntfile.js to build out the assets and t4 versions.

To get started:  
1.  Make sure you're running git and [node.js](http://nodejs.org/) successfully  
2.  Download the respository from github  
3.  CD into the directory  
4.  Run "npm install" node_modules listed in the package.json file  
5.  Run "grunt build" to build out assets and t4 folder from the build folder. At this point you have all the files you should need. The last task in "grunt build" is a "watch" task. You will node is "Waiting..." for any changes to the "/build" directory.  
6.  You should work in the build directory, view your compiled code from the assets directory, and push the finished code in the t4 directory to T4.  
7.  After you made your changes commit them back to the git repositotry for version controlling.  
8.  When you want to pick back up on the project (and you don't need to do the initial build out) just runt "grunt" to start the watch task.  
9.  If you are making any significant changes break a Branch off of Master and work from that. Commit a pull request to merge the Branch with Master.  

*Note:* Do not push any sensitive data to the git repository! The git repo should only be used for public facing template code.

For specific instructions about T4 components, view documentation in the [intranet/t4](www.massey.vcu.edu/intranet/t4)
