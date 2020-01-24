# Working with Git as a Team

## Branches
- create branch locally: `git checkout -b sausage-dog`
  - -b is for 'branch'
- push to that new branch: `git commit origin sausage-dog`
- ready to add to master: on git, make pull request to pull branch into master
  - if there are merge conflicts pull code into Node and sort them out
- request a review (PROTECT THE MASTER)
- when review is approved, delete branch so that it doesn't clog up the branch list
- now, on local machine, go back to the master branch: `git checkout master`
- get changes from git: `git pull origin master`
