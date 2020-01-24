# Working with Git as a Team

## Branches
- create branch locally: `git checkout -b sausage-dog`
  - -b is for 'branch'
  - hey what branch am I on?!?! `git branch`
    - this shows all local branches and the branch that you are on. To see all branches on local and git: `git branch -a`. This is handy for checking whether a branch has only been created locally, or is also on git
- ready to add to a branch?
  - `git add niceFileName.py`
  - `git commit -m 'even nicer commit message'`
  - `git push origin sausage-dog`
- ready to add to master: on git, on sausage-dog branch, click 'New pull request' to make request to pull branch into master
  - if there are merge conflicts pull code into Node and sort them out
- request a review (PROTECT THE MASTER)
- when review is approved, delete branch so that it doesn't clog up the branch list:
  - delete locally: `git branch -d sausage-dog` (if branch has not yet been merged, an error will show phew)
  - delete remotely: `git push origin --delete sausage-dog`
- on local machine: switch between branches with `git checkout master`
- other peeps may have updated stuff while you've been out on your branch. Pull down these changes: `git pull origin master`
