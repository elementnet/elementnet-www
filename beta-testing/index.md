# Beta Testing on ElementNetwork
In order to beta test ElementNetwork, you will need [Git](https://git-scm.com), [Node.JS](https://nodejs.org), and [NPM](https://www.npmjs.com)

Next, go into your terminal (regular terminal on Mac and Linux, Git Bash or Cygwin on Windows), and type this in:
```shell
git clone https://github.com/elementnet/e.git elementnet-testing
cd elementnet-testing
# If you were told to switch branches with a piece of code, do so here.
npm install && npm start
```

If `elementnet-testing` already exists, simply do:
```shell
cd elementnet-testing
git fetch --all
git reset --hard HEAD
git clean -f -d
# If you were told to switch branches, change master to that branch
git pull origin develop
npm install && npm start
```
Now, go to `localhost:7878/projects/editor/`, and you should see the project editor

To stop the server, press `Ctrl+C` or `Cmd+C`.
