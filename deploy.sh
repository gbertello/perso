# Configuration needs to be defined in ~/.profile with the following variables:
#   - SERVER
#
if [ -f ~/.profile ]
then
  source ~/.profile
fi

if [ $# -eq 0 ]
then
  echo "Insert comment for git commit"
  exit 0
fi

git add --all
git commit -m "$1"
git push origin master

ssh $SERVER "cd perso; git pull origin master; export PATH=/bin:/usr/bin:/snap/bin; ./run.sh"
