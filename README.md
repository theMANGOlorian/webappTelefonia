# webappTelefonia

# Come eseguire
> Scaricare lo zip completo
> entrare dentro alla cartella demo da powershell
> inserire il comando
```shell
./mvnw spring-boot:run
```

# Come costruire il container docker
Eseguire il seguente comando

```shell
docker build -t webapp-backend:latest -f Dockerfile.backend .
```

# Come avviare l'applicazione attraverso docker
Eseguire il seguente comando

```shell
docker run -it --rm -p 3000:8080 webapp-backend:latest
```
