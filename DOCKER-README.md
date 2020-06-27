## FYI when NGINX is installed your local machine stop it first
```systemctl stop nginx```

#### To start docker run the ff. command
```docker-compose up```

#### To stop docker run the ff. command
```docker-compose stop```

#### To execute a command in a container run the ff. command
```docker exec -it IMAGE_NAME /bin/bash```

#### To remove all images
```docker system prune -a```

  - FYI when containers are being used only the images with no working containers will be removed

#### List all working containers
```docker ps -a```

#### List all images
```docker images```

#### Docker help
```docker --help or docker -H```

#### Docker Compose help
```docker-compose --help or docker-compose -h```