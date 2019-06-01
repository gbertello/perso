ssh $OVH "mkdir -p ~/perso/mongo/data/prod"
ssh $OVH "mkdir -p ~/perso/node/public/img/prod"

scp -r mongo/data/prod $OVH:~/perso/mongo/data/prod
scp -r node/public/img/prod $OVH:~/perso/node/public/img/prod