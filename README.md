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
docker build -t webapp-backend:latest -f Dockerfile.frontend.backend .
```

# Come avviare l'applicazione attraverso docker
Eseguire il seguente comando

```shell
docker run -it --rm -p 3000:8080 webapp-backend:latest
```

# Scarica Node.js come Docker image:
```shell
docker pull node:24-slim
```
# Crea un Node.js container e avvia una sessione shell:
```shell
docker run -it --rm --entrypoint sh node:24-slim
```
# Verifica Node.js version:
```shell
node -v # Should print "v24.15.0".
```
# Verifica npm version:
```shell
npm -v # Should print "11.12.1".
```