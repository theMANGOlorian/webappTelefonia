# webappTelefonia

# Come eseguire
> Scaricare lo zip completo
> entrare dentro alla cartella demo da powershell
> inserire il comando
```shell
./mvnw spring-boot:run
```

# Come costruire l'intera webapp
Eseguire il comando nella cartella root

```shell
docker-compose up -d --build
```

# Come costruire il container docker separatamente
Eseguire il seguente comando

```shell
docker build -t webapp-backend:latest -f Dockerfile.backend .
```


```shell
docker build -t webapp-frontend:latest -f Dockerfile.frontend .
```

# Come avviare i container docker separatamente
Eseguire il seguente comando

```shell
docker run -it --rm -p 3000:8080 webapp-backend:latest
```

```shell
docker run -it --rm -p 8081:80 webapp-frontend:latest
```

```shell
docker run --name webapp-database -e POSTGRES_USER=MatDen -e POSTGRES_PASSWORD=MatDen0302! -e POSTGRES_DB=webapp-db -p 5432:5432 -v postgres_data:/var/lib/postgresql -d postgres

```
