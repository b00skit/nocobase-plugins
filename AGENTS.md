Before compiling any programs, make sure you clone the nocobase directory into some sort of directory.
gh repo clone nocobase/nocobase

When you have the repo cloned, make sure you setup a test enviroment to ensure that nocobase can run.

Then build the plugin via the following steps:

yarn build @my-project/plugin-hello --tar

Note: If the plugin is created in the source repository, the first build will trigger a full repository type check, which may take some time. It's recommended to ensure dependencies are installed and the repository is in a buildable state.

After the build completes, the package file is located at storage/tar/@my-project/plugin-hello.tar.gz by default, return this file back to the user upon request.
