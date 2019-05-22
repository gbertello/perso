docker stop perso
docker rm perso
docker build -t perso .
docker run --restart always --name perso -d -p 80:80 perso